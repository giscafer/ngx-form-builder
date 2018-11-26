import { StringWidget } from "./string/string.widget";
import { WidgetRegistry } from '../../widget-registry';
import { WidgetType } from "../../schema";
import { ButtonWidget } from "./button/button.widget";
import { DateWidget } from "./date/date.widget";
import { TimeWidget } from "./time/time.widget";
import { DateRangeWidget } from "./date-range/date-range.widget";
import { CheckboxWidget } from "./checkbox/checkbox.widget";
import { ArrayWidget } from "./array/array.widget";
import { RadioWidget } from "./radio/radio.widget";
import { TextAreaWidget } from "./textarea/textarea.widget";
import { SelectWidget } from "./select/select.widget";
import { TableWidget } from "./table/table.widget";
import { TreeSelectWidget } from "./tree-select/tree-select.widget";
import { YztGridWidget } from "./yzt-grid/yzt-grid.widget";

export class ZorroDefaultWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();
    this.setType(WidgetType.ZORRO);
    this.register('string', StringWidget);
    this.register('button', ButtonWidget);
    this.register('date', DateWidget);
    this.register('time', TimeWidget);
    this.register('date-range', DateRangeWidget);
    this.register('checkbox', CheckboxWidget);
    this.register('radio', RadioWidget);
    this.register('textarea', TextAreaWidget);

    this.register('array', ArrayWidget);
    this.register('select', SelectWidget);
    this.register('table', TableWidget);
    this.register('yzt-grid', YztGridWidget);
    this.register('tree-select', TreeSelectWidget);

    //   this.register('search', StringWidget);
    //   this.register('tel', StringWidget);
    //   this.register('url', StringWidget);
    //   this.register('email', StringWidget);
    //   this.register('password', StringWidget);
    //   this.register('color', StringWidget);
    //   this.register('date', StringWidget);
    //   this.register('date-time', StringWidget);
    //   this.register('time', StringWidget);
    //   this.register('integer', IntegerWidget);
    //   this.register('number', IntegerWidget);
    //   this.register('range', RangeWidget);
    //   this.register('boolean', CheckboxWidget);

    this.setDefaultWidget(StringWidget);
  }
}

