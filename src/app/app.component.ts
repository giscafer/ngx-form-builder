import {
  ViewChild,
  Component,
  ViewEncapsulation,
  AfterViewInit
} from '@angular/core';

import * as copy from 'copy-text-to-clipboard';

import 'brace/theme/chrome';
import 'brace/mode/json';
import { formatTime } from './utils/formatTime';
import { initSplitEventHandler } from './utils/setSplitPosition';
import { funDownload } from './utils/download';
import { NzMessageService } from 'ng-zorro-antd';

import { AceEditorDirective } from 'ng2-ace';

@Component({
  selector: 'sf-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {

  @ViewChild(AceEditorDirective)
  private editorDirective: AceEditorDirective;
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

  createMessage = (type, text) => {
    this._message.create(type, `${text}`);
  };

  constructor(private _message: NzMessageService) {

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
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      initSplitEventHandler();
    })
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
    } else {
      this.builderInfo.msgType = type;
    }
    this.builderInfo.msg = text;
  }

  onBuilderFinish($event) {
    this.htmlCode = $event.code;
    this.builderInfo._endTime = new Date().getTime();
    this.log(`页面构建完成，${this.builderInfo._endTime - this.builderInfo._startTime}ms`, 'info');
  }

  run(editor) {
    if (this.hasEditorError()) {
      this.log('编辑器内容有误', 'error');
      return;
    }
    let text = this.editorDirective.editor.getValue();
    this.builderInfo._startTime = new Date().getTime();
    this.schemaJson = JSON.parse(text);
  }
  onAceChange(data) {
    console.log('~~~编辑器内容变化~~~');
  }

  copyHTMLCode(type) {
    if (type === 1) {
      if ('download' in document.createElement('a')) {
        funDownload(this.htmlCode);
      } else {
        return this.createMessage('error', '代码下载失败，请使用 Chrome 浏览器');
      }
      return this.createMessage('success', '文件下载成功！');
    }
    if (copy(this.htmlCode)) {
      return this.createMessage('success', '代码已经复制到剪贴板！');
    } else {
      return this.createMessage('error', '代码复制失败，请使用Chrome浏览器');
    }
  }

  private hasEditorError() {
    var annotations = this.editorDirective.editor.getSession().getAnnotations();
    for (var aid = 0, alen = annotations.length; aid < alen; ++aid) {
      if (annotations[aid].type === 'error') {
        return true;
      }
    }
    return false;
  }
}
