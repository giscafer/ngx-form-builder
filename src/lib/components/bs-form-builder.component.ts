/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/

import {
    Component,
    ComponentRef,
    ChangeDetectorRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    ViewChild,
    ViewContainerRef,
    ViewEncapsulation,
} from '@angular/core';
import { FormControl } from '@angular/forms';

import {
    FormProperty,
    FormPropertyFactory,
    SchemaPreprocessor,
    ValidatorRegistry,
    Validator,
    ActionRegistry,
    Action
} from '../model';
import { Widget } from '../widget';
import { TerminatorService } from '../terminator.service';
import { SchemaValidatorFactory } from '../schemavalidator.factory';

import { ISchema } from '../schema/index';

import { WidgetFactory } from '../widget-factory';
import { WidgetRegistry } from '../widget-registry';
import { BootStrapDefaultWidgetRegistry } from '../widgets/bootstrap/defaultwidget-registry';
import { BsTmplBuilder } from '../builder/bs-template-builder';
import { ListOfGridSizeName } from '../utils/cls';



export function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
};

@Component({
    selector: 'bs-form-builder',
    encapsulation: ViewEncapsulation.None,
    template: `<div #target></div>`,
    providers: [
        WidgetFactory,
        SchemaPreprocessor,
        ActionRegistry,
        ValidatorRegistry,
        TerminatorService,
        {
            provide: FormPropertyFactory,
            useFactory: useFactory,
            deps: [SchemaValidatorFactory, ValidatorRegistry]
        },
        { provide: WidgetRegistry, useClass: BootStrapDefaultWidgetRegistry }]
})
export class BsFormBuilderComponent implements OnChanges {

    @Input() widgetInfo: any;

    @Output() widgetInstanciated = new EventEmitter<any>();

    @ViewChild('target', { read: ViewContainerRef }) container: ViewContainerRef;

    @Input() validators: { [path: string]: Validator } = {};

    @Input() schema: any = null;

    @Input() model: any;

    @Input() actions: { [actionId: string]: Action } = {};


    @Output() onChange = new EventEmitter<{ value: any }>();

    @Output() modelChanged = new EventEmitter<any>();

    @Output() isValid = new EventEmitter<boolean>();

    @Output() onErrorChange = new EventEmitter<{ value: any[] }>();

    @Output() onErrorsChange = new EventEmitter<{ value: any }>();

    @Output() onBuilderFinish = new EventEmitter<{ code: any }>();


    control: FormControl = new FormControl('', () => null);
    rootProperty: FormProperty = null;
    widget: Widget<any> = null;
    buttons = [];

    private static counter = 0;
    private widgetInstance: any;
    private ref: ComponentRef<any>;
    private registry: WidgetRegistry;

    constructor(
        registry: WidgetRegistry,
        private formPropertyFactory: FormPropertyFactory,
        private actionRegistry: ActionRegistry,
        private validatorRegistry: ValidatorRegistry,
        private widgetFactory: WidgetFactory = null,
        private cdr: ChangeDetectorRef,
        private terminator: TerminatorService,
    ) {
        this.registry = registry;
    }

    ngOnInit() {
        this.terminator.onDestroy.subscribe(destroy => {
            if (destroy && this.ref) {
                this.ref.destroy();
            }
        });
    }

    ngOnChanges(changes: any) {
        if (changes.validators) {
            this.setValidators();
        }

        if (changes.actions) {
            this.setActions();
        }

        if (this.schema && !this.schema.type) {
            this.schema.type = 'object';
        }

        if (this.schema && changes.schema) {
            this[this.schema.modelName] = {};
            this.coverProperty(this.schema);

            if (this.schema.debug) {
                console.warn('schema debugger', this.schema);
            }

            if (!changes.schema.firstChange) {
                this.terminator.destroy();
            }
            SchemaPreprocessor.preprocess(this.schema);
            this.rootProperty = this.formPropertyFactory.createProperty(this.schema);
            this.rootProperty.valueChanges.subscribe(value => {
                if (this.modelChanged.observers.length > 0) { // two way binding is used
                    if (this.model) {
                        Object.assign(this.model, value);
                    } else {
                        this.model = value;
                    }
                    this.modelChanged.emit(value);
                }
                this.onChange.emit({ value: value });
            });
            this.rootProperty.errorsChanges.subscribe(value => {
                this.onErrorChange.emit({ value: value });
                this.isValid.emit(!(value && value.length));
            });
        }
        if (!this.rootProperty) return;
        if (this.schema && (changes.model || changes.schema)) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }

        this._createForm(this.rootProperty.schema.widget);

    }

    private coverProperty(schema: ISchema) {

        Object.keys(schema.properties).forEach(key => {
            let p = schema.properties[key];
            p['name'] = p['name'] ? p['name'] : key;
            p['formId'] = 'field' + (BsFormBuilderComponent.counter++);
            p['modelName'] = schema.modelName || 'model';
            if (schema.grid) {
                Object.assign(p, { grid: schema.grid }, p.grid ? { grid: p.grid } : {});
            }
            /*  ListOfGridSizeName.forEach(name => {
                 if (schema[name]) {
                     Object.assign(p, { [name]: schema[name] }, p[name] ? { [name]: p[name] } : {});
                 }
             }); */
            if (p.items && p.properties && p.type === 'array') {
                this.coverProperty(p.items);
            }
        });
    }

    private setValidators() {
        this.validatorRegistry.clear();
        if (this.validators) {
            for (let validatorId in this.validators) {
                if (this.validators.hasOwnProperty(validatorId)) {
                    this.validatorRegistry.register(validatorId, this.validators[validatorId]);
                }
            }
        }
    }

    private setActions() {
        this.actionRegistry.clear();
        if (this.actions) {
            for (let actionId in this.actions) {
                if (this.actions.hasOwnProperty(actionId)) {
                    this.actionRegistry.register(actionId, this.actions[actionId]);
                }
            }
        }
    }

    onWidgetInstanciated(widget: Widget<any>) {
        this.widget = widget;
        let id = 'field' + (BsFormBuilderComponent.counter++);

        this.widget.formProperty = this.rootProperty;
        this.widget.schema = this.rootProperty.schema;
        this.widget.name = id;
        this.widget.id = id;
        this.widget.control = this.control;
    }

    public reset() {
        this.rootProperty.reset(null, true);
    }

    private _createForm(widgetInfo: any) {

        let widgetTemplate = BsTmplBuilder(this.registry, this.rootProperty);
        // let widgetTemplate = this.registry.getWidgetType(widgetInfo.id);

        let template = widgetTemplate;
        let properties = {
            "formProperty": this.rootProperty,
            "control": this.control,
            "property": { visible: true },
            "_debug_": this.rootProperty.schema.debug,
            "modelName": this.rootProperty.schema.modelName || 'model',
            [this.rootProperty.schema.modelName || 'model']: this.rootProperty.value || {}
        }
        this.ref = this.widgetFactory.addWidget(this.container, template, properties, this);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
        this.onBuilderFinish.emit({ code: template });
    }
}
