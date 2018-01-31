import {
  Component,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';

import * as Clipboard from 'clipboard';

import 'brace/theme/chrome';
import 'brace/mode/json';

@Component({
  selector: 'sf-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {

  htmlCode: string;
  schemaString: any;
  schemaJson: any;
  model: any;
  value: any;
  actions = {};
  // ace
  text = 'test';
  aceOptions = {
    printMargin: false,
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true
  };
  constructor() {

    this.schemaString = require('!!raw-loader!../mock/otherschema.json');
    this.schemaJson = JSON.parse(this.schemaString);
    // this.schema = require('!!raw-loader!../mock/sampleschema.json');
    // this.schema = require('!!raw-loader!../mock/simpleschema.json');
    // this.model = require('!!raw-loader!../mock/samplemodel.json');

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
    this.initClipboard();
  }

  changeSchema() {
    this.schemaString = require('!!raw-loader!../mock/person-info.json');
    this.schemaJson = JSON.parse(this.schemaString);
  }

  disableAll() {
    Object.keys(this.schemaJson.properties).map(prop => {
      this.schemaJson.properties[prop].readOnly = true;
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

  onAceChange(data) {
    // console.log(data);
  }

  initClipboard() {
    var clipboard = new Clipboard('#copyCodeBtn');
    clipboard.on('success', e => {
      console.info('Action:', e.action);
      console.info('text:', e.text);
      alert('Copy HTML code success!')
      e.clearSelection();
    });

    clipboard.on('error', e => {
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
    });
  }
}
