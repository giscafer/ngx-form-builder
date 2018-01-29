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

    // 按钮事件注册
    this.actions['alert'] = (property, options) => {
      property.forEachChildRecursive(child => {
        console.log(child.valid, child);
      });
      alert(JSON.stringify(this.value));
    };

    this.actions['reset'] = (form, options) => {
      form.reset();
    };
    this.actions['disable'] = this.disableAll.bind(this);

  }

  changeSchema() {
    this.schema = require('../mock/products.json');
  }

  disableAll() {
    Object.keys(this.schema.properties).map(prop => {
      this.schema.properties[prop].readOnly = true;
    });
  }

  setValue(value) {
    this.value = value;
  }

  logErrors(errors) {
    console.log('ERRORS', errors);
  }
}
