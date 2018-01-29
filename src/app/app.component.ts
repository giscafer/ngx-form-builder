import {
  Component,
  ViewEncapsulation
} from '@angular/core';

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

  constructor() {

    this.schema = require('../mock/otherschema.json');
    // this.schema = require('../mock/sampleschema.json');
    // this.schema = require('../mock/simpleschema.json');
    // this.model = require('../mock/samplemodel.json');
  }

  logErrors(errors) {
    console.log('ERRORS', errors);
  }

  changeSchema() {
    this.schema = require('../mock/otherschema.json');
  }

  disableAll() {
    Object.keys(this.schema.properties).map(prop => {
      this.schema.properties[prop].readOnly = true;
    });
  }

  modelChanged(value) {
    this.value = value;
  }
}
