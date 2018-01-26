import { WidgetType } from './widget-type';

export class WidgetRegistry {

  static wigetType: WidgetType;

  private bootstrap_widgets: { [type: string]: any } = {};
  private primeng_widgets: { [type: string]: any } = {};
  private zorro_widgets: { [type: string]: any } = {};

  private defaultWidget: any;

  constructor() {

  }

  setType(wigetType: WidgetType = WidgetType.BOOTSTRAP) {
    WidgetRegistry.wigetType = wigetType;
  }

  get widgets() {
    switch (WidgetRegistry.wigetType) {
      case WidgetType.BOOTSTRAP:
        return this.bootstrap_widgets;
      case WidgetType.PRIMENG:
        return this.primeng_widgets;
      case WidgetType.ZORRO:
        return this.zorro_widgets;
      default:
        return this.bootstrap_widgets;
    }
  }

  setDefaultWidget(widget: any) {
    this.defaultWidget = widget;
  }

  getDefaultWidget() {
    return this.defaultWidget;
  }

  hasWidget(type: string) {
    return this.widgets.hasOwnProperty(type);
  }

  register(type: string, widget: any) {
    this.widgets[type] = widget;
  }

  getWidgetType(type: string): any {
    if (this.hasWidget(type)) {
      return this.widgets[type];
    }
    return this.defaultWidget;
  }
}
