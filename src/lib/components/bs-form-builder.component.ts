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
} from '@angular/core';
import { FormControl } from '@angular/forms';

import {
    FormProperty,
    FormPropertyFactory,
    SchemaPreprocessor,
    ValidatorRegistry,
    Validator,
    ActionRegistry
} from 'angular2-schema-form/dist/model';
import { SchemaValidatorFactory, Widget } from 'angular2-schema-form';
import { TerminatorService } from 'angular2-schema-form/dist/terminator.service';

import { WidgetFactory } from '../widget-factory';
import { WidgetRegistry } from '../widget-registry';
import { BootStrapDefaultWidgetRegistry } from '../widgets/bootstrap/defaultwidget-registry';
import { BsTmplBuilder } from '../builder/bs-template-builder';
import { ISchema } from '../schema/index';



export function useFactory(schemaValidatorFactory, validatorRegistry) {
    return new FormPropertyFactory(schemaValidatorFactory, validatorRegistry);
};

@Component({
    selector: 'bs-form-builder',
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

    @Output() onChange = new EventEmitter<{ value: any }>();

    @Output() modelChanged = new EventEmitter<any>();

    @Output() isValid = new EventEmitter<boolean>();

    @Output() onErrorChange = new EventEmitter<{ value: any[] }>();

    @Output() onErrorsChange = new EventEmitter<{ value: any }>();

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
            if (destroy) {
                this.ref.destroy();
            }
        });
        this.parseButtons();
    }

    ngOnChanges(changes: any) {
        if (changes.validators) {
            this.setValidators();
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

        if (this.schema && (changes.model || changes.schema)) {
            this.rootProperty.reset(this.model, false);
            this.cdr.detectChanges();
        }

        this._createForm(this.rootProperty.schema.widget);

    }

    private coverProperty(schema: ISchema) {

        Object.keys(schema.properties).forEach(key => {
            let property = schema.properties[key];
            property['name'] = property['name'] ? property['name'] : key;
            property['modelName'] = schema.modelName || 'model';
            if (property.items && property.type === 'array') {
                this.coverProperty(property.items);
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

    private parseButtons() {
        if (this.rootProperty.schema.buttons !== undefined) {
            this.buttons = this.rootProperty.schema.buttons;

            for (let button of this.buttons) {
                this.createButtonCallback(button);
            }
        }
    }

    private createButtonCallback(button) {
        button.action = (e) => {
            let action;
            if (button.id && (action = this.actionRegistry.get(button.id))) {
                if (action) {
                    action(this.rootProperty, button.parameters);
                }
            }
            e.preventDefault();
        };
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
            [this.rootProperty.schema.modelName || 'model']: {}
        }
        console.log(template);
        this.ref = this.widgetFactory.addWidget(this.container, template, properties, this);
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
    }
}
