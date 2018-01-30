


import { ButtonWidget } from './button/button.widget';
import { StringWidget } from './string/string.widget';

import { WidgetRegistry } from '../../widget-registry';
import { WidgetType } from '../../schema/index';
import { IntegerWidget } from './integer/integer.widget';
import { RangeWidget } from './range/range.widget';
import { TextAreaWidget } from './textarea/textarea.widget';
import { SelectWidget } from './select/select.widget';
import { RadioWidget } from './radio/radio.widget';

export class BootStrapDefaultWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();
    this.setType(WidgetType.BOOTSTRAP);
    this.register('string', StringWidget);
    this.register('search', StringWidget);
    this.register('tel', StringWidget);
    this.register('url', StringWidget);
    this.register('email', StringWidget);
    this.register('password', StringWidget);
    this.register('color', StringWidget);
    this.register('date', StringWidget);
    this.register('date-time', StringWidget);
    this.register('time', StringWidget);
    this.register('integer', IntegerWidget);
    this.register('number', IntegerWidget);
    this.register('button', ButtonWidget);
    this.register('range', RangeWidget);
    this.register('textarea', TextAreaWidget);
    this.register('select', SelectWidget);
    this.register('radio', RadioWidget);
    
    /*     
        this.register('array',  ArrayWidget);
        this.register('object',  ObjectWidget);
    
    
        this.register('file', FileWidget);
        this.register('radio', RadioWidget);
        this.register('boolean', CheckboxWidget);
        this.register('checkbox', CheckboxWidget);
 */
    this.setDefaultWidget(StringWidget);
  }
}

