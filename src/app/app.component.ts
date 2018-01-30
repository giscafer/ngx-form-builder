import {
  Component,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';

import * as Clipboard from 'clipboard';

@Component({
  selector: 'sf-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {

  htmlCode: string;
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

  ngAfterViewInit(): void {
    var clipboard = new Clipboard('.copyCodeBtn');

    clipboard.on('success', e => {
      console.info('Action:', e.action);
      alert('Copy HTML code success!')
      e.clearSelection();
    });

    clipboard.on('error', e => {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
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

  onBuilderFinish($event) {
    // console.log($event.code);
    this.htmlCode = $event.code;
  }
}
