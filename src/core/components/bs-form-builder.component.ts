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
import { TerminatorService } from '../terminator.service';
import { WidgetFactory } from '../widget-factory';
import { WidgetRegistry } from '../widget-registry';
import { BootStrapDefaultWidgetRegistry } from '../widgets/bootstrap/defaultwidget-registry';

@Component({
    selector: 'bs-form-builder',
    template: `<div #target></div>`,
    providers: [WidgetFactory, TerminatorService, { provide: WidgetRegistry, useClass: BootStrapDefaultWidgetRegistry }]
})
export class BsFormBuilderComponent implements OnChanges {

    @Input() widgetInfo: any;

    @Output() widgetInstanciated = new EventEmitter<any>();

    @ViewChild('target', { read: ViewContainerRef }) container: ViewContainerRef;

    private widgetInstance: any;
    private ref: ComponentRef<any>;
    private registry: WidgetRegistry;

    constructor(
        registry: WidgetRegistry,
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
        })
    }

    ngOnChanges() {
        let widgetTemplate = this.registry.getWidgetType('button');
        let template = widgetTemplate;
        this.ref = this.widgetFactory.addWidget(this.container, template, {});
        this.widgetInstanciated.emit(this.ref.instance);
        this.widgetInstance = this.ref.instance;
        this.cdr.detectChanges();
    }
}
