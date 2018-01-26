

import { WidgetType } from '../../widget-type';

import { ButtonWidget } from './button/button.widget';
import { StringWidget } from './string/string.widget';

/* import { ArrayWidget } from './array/array.widget';
import { CheckboxWidget } from './checkbox/checkbox.widget';
import { FileWidget } from './file/file.widget';
import { IntegerWidget } from './integer/integer.widget';
import { ObjectWidget } from './object/object.widget';
import { RadioWidget } from './radio/radio.widget';
import { RangeWidget } from './range/range.widget';
import { SelectWidget } from './select/select.widget';
import { TextAreaWidget } from './textarea/textarea.widget';
 */
import { WidgetRegistry } from '../../widget-registry';

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

    this.register('button', ButtonWidget);
    /*     
        this.register('array',  ArrayWidget);
        this.register('object',  ObjectWidget);
    
        this.register('integer', IntegerWidget);
        this.register('number', IntegerWidget);
        this.register('range', RangeWidget);
    
        this.register('textarea', TextAreaWidget);
    
        this.register('file', FileWidget);
        this.register('select', SelectWidget);
        this.register('radio', RadioWidget);
        this.register('boolean', CheckboxWidget);
        this.register('checkbox', CheckboxWidget);
 */
    this.setDefaultWidget(StringWidget);
  }
}

