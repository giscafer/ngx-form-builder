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
import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widget-factory';
import { WidgetRegistry } from './widget-registry';
import { BS_TEMPLATE } from '../mock/bs-temp';

@Component({
  selector: 'sf-widget-chooser',
  template: `<div #target></div>`,
  providers: [WidgetFactory, TerminatorService, WidgetRegistry]
})
export class WidgetChooserComponent implements OnChanges {

  @Input() widgetInfo: any;

  @Output() widgetInstanciated = new EventEmitter<any>();

  @ViewChild('target', { read: ViewContainerRef }) container: ViewContainerRef;

  private widgetInstance: any;
  private ref: ComponentRef<any>;

  constructor(
    private widgetFactory: WidgetFactory = null,
    private registry: WidgetRegistry = null,
    private cdr: ChangeDetectorRef,
    private terminator: TerminatorService,
  ) { }

  ngOnInit() {
    this.terminator.onDestroy.subscribe(destroy => {
      if (destroy) {
        this.ref.destroy();
      }
    })
  }

  ngOnChanges() {
    // let componentClass = this.registry.getWidgetType(type);
    let template = BS_TEMPLATE;
    this.widgetFactory.addWidget(this.container, template, {});
    this.widgetInstanciated.emit(this.ref.instance);
    this.widgetInstance = this.ref.instance;
    this.cdr.detectChanges();
  }
}
