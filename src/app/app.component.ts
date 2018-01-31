import {
  Component,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';

import * as Clipboard from 'clipboard';

import 'brace/theme/chrome';
import 'brace/mode/json';
import { formatTime } from './utils/formatTime';

@Component({
  selector: 'sf-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  // schema
  actions = {};

  // form builder
  model: any;
  value: any;
  htmlCode: string;
  schemaString: any;
  schemaJson: any;
  count = 1;
  builderInfo = {
    msgType: 'info',
    msg: '',
    finishTime: '',
    _startTime: 0,
    _endTime: 0
  }
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
    this.builderInfo._startTime = new Date().getTime();

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

  toggleSchema() {
    if (this.count === 1) {
      this.schemaString = require('!!raw-loader!../mock/person-info.json');
    } else {
      this.schemaString = require('!!raw-loader!../mock/otherschema.json');
    }
    this.schemaJson = JSON.parse(this.schemaString);
    this.count = this.count === 1 ? 2 : 1;
    this.builderInfo._startTime = new Date().getTime();
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
    this.log('页面构建失败，请检查再重试', 'error');
  }

  log(text, type) {

    this.builderInfo.finishTime = formatTime(new Date());

    if (type !== 'warn' && type !== 'error') {
      this.builderInfo.msgType = 'info';
    }
    this.builderInfo.msg = text;
  }

  onBuilderFinish($event) {
    this.htmlCode = $event.code;
    this.builderInfo._endTime = new Date().getTime();
    this.log(`页面构建完成，${this.builderInfo._endTime - this.builderInfo._startTime}ms`, 'info');
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
