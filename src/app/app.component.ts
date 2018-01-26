import {
  Component,
  ViewEncapsulation
} from '@angular/core';
import {
  WidgetRegistry,
  BootStrapDefaultWidgetRegistry
} from '../core';

@Component({
  selector: 'sf-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  schema: any;
  model: any;
  value: any;
  actions = {};

  constructor(registry: WidgetRegistry) {

    this.schema = require('./otherschema.json');
    // this.schema = require('./sampleschema.json');
    this.model = require('./samplemodel.json');
  }

  logErrors(errors) {
    console.log('ERRORS', errors);
  }

  changeSchema() {
    this.schema = require('./otherschema.json');
  }

  disableAll() {
    Object.keys(this.schema.properties).map(prop => {
      this.schema.properties[prop].readOnly = true;
    });
  }

  setValue(value) {
    this.value = value;
  }
}
