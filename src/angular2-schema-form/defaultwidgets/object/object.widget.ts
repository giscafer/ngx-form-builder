import { Component } from '@angular/core';

import { ObjectLayoutWidget } from '../../widget';
import { objectTpl } from './template';

@Component({
  selector: 'sf-form-object',
  template:objectTpl
})
export class ObjectWidget extends ObjectLayoutWidget { }
