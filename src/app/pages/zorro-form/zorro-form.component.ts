import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import * as copy from 'copy-text-to-clipboard';
import { AceEditorDirective } from 'ng-ace-tern';
import { NzMessageService } from 'ng-zorro-antd';
import { Subscription } from 'rxjs';
import { StartUpService } from '../../services/startup.service';
import { funDownload } from '../../utils/download';
import { formatTime } from '../../utils/formatTime';
import { initSplitEventHandler } from '../../utils/setSplitPosition';
import { YapiService } from './yapi.service';


@Component({
    selector: 'app-zorro-form',
    templateUrl: './zorro-form.component.html',
    styleUrls: [],
    viewProviders: [YapiService,]
})
export class ZorroFormComponent implements AfterViewInit, OnDestroy {

    @ViewChild(AceEditorDirective)
    private editorDirective: AceEditorDirective;
    // schema
    actions = {};
    // form builder
    model: any;
    value: any;
    fileNames = {
        htmlFileName: '',
        compFileName: ''
    }
    htmlCode: string;
    componentCode: string;
    schemaString: string = '';
    schemaJson: Object;
    count = 1;
    builderInfo = {
        msgType: 'info',
        msg: '',
        finishTime: '',
        _startTime: 0,
        _endTime: 0
    }
    demoName: string = 'Horizontal Layout Example';
    // ace
    text = 'test';
    aceOptions = {
        printMargin: false,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    };

    showCode = false;

    createMessage = (type, text) => {
        this._message.create(type, `${text}`);
    };

    subject: Subscription;

    private demoType: string;

    constructor(
        private _message: NzMessageService,
        private service: StartUpService,
        private yapiSrv: YapiService,
    ) {

        this.subject = this.service.mockChanged.subscribe(evt => {
            this.schemaJson = this.service.getData('horizontalMockData');
            this.schemaString = JSON.stringify(this.schemaJson, null, 4);
        });

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

    toggleSchema(type) {
        this.demoType = type;
        switch (type) {
            case 'horizontal-layout':
                this.demoName = 'Horizontal Layout Example';
                this.schemaString = JSON.stringify(this.service.getData('horizontalMockData'), null, 4);
                break;
            case 'vertical-layout':
                this.demoName = 'Vertical Layout Example';
                this.schemaString = JSON.stringify(this.service.getData('verticalMockData'), null, 4);
                break;
            case 'register-form':
                this.demoName = 'Register Form';
                this.schemaString = JSON.stringify(this.service.getData('registerFormMockData'), null, 4);
                break;
            case 'simple':
                this.demoName = 'Simple Example';
                this.schemaString = JSON.stringify(this.service.getData('personInfoMockData'), null, 4);
                break;
            case 'other':
                this.demoName = 'Simple Example2';
                this.schemaString = JSON.stringify(this.service.getData('otherschemaMockData'), null, 4);
                break;
            case 'layout':
                this.demoName = 'Grid Layout Example';
                this.schemaString = JSON.stringify(this.service.getData('zorroGridMockData'), null, 4);
                break;
            case 'table':
                this.demoName = 'Table Example';
                this.schemaString = JSON.stringify(this.service.getData('tableMockData'), null, 4);
                break;
            case 'full':
                this.demoName = 'Full Widget Example';
                this.schemaString = JSON.stringify(this.service.getData('zorroFullWidgetMockData'), null, 4);
                break;
            case 'yapi':
                this.demoName = 'Yapi 列表自动生成';
                this.schemaString = JSON.stringify(this.service.getData('yapiMockData'), null, 4);
                break;
        }

        this.schemaJson = JSON.parse(this.schemaString);
        this.builderInfo._startTime = new Date().getTime();
    }

    setValue(value) {
        this.value = value;
    }

    logErrors(errors) {
        console.log('ERRORS', errors);
        this.log('build failed，try again', 'error');
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
        this.htmlCode = $event.htmlCode;
        this.componentCode = $event.componentCode;
        this.fileNames = $event.fileNames;
        this.builderInfo._endTime = new Date().getTime();
        this.log(`build success，${this.builderInfo._endTime - this.builderInfo._startTime}ms`, 'info');
    }

    run(editor) {
        if (this.hasEditorError()) {
            this.log('json error', 'error');
            return;
        }
        let text = this.editorDirective.editor.getValue();
        this.builderInfo._startTime = new Date().getTime();

        if (this.demoType === 'yapi') {

            const json = JSON.parse(text);
            const keys = Object.keys(json);

            if (!keys.includes('token')) {
                this._message.warning('请填写授权访问项目的token串');
                return;
            }
            if (!keys.includes('url')) {
                this._message.warning('请输入YAPI的接口url');
                return;
            }

            this.yapiSrv.genSchemaByInterface(json).then(schema => {
                console.log(schema);
                if (!schema) {
                    this._message.error('获取接口信息错误！');
                    return;
                }
                schema['tableComponent'] = json.tableComponent || 'nz-table';
                this.schemaJson = schema;
            });

            return;
        }

        this.schemaJson = JSON.parse(text);
    }


    onAceChange(data) {
        console.log('~~~编辑器内容变化~~~');
    }

    copyCode(type?: number, codeType?: string) {
        const flag = codeType === 'ts';
        if (type === 1) {
            if ('download' in document.createElement('a')) {
                funDownload(flag ? this.componentCode : this.htmlCode, flag ? this.fileNames.compFileName : this.fileNames.htmlFileName);
            } else {
                return this.createMessage('error', '代码下载失败，请使用 Chrome 浏览器');
            }
            return this.createMessage('success', '文件下载成功！');
        }
        let result = false;
        if (flag) {
            result = copy(this.componentCode)
        } else {
            result = copy(this.htmlCode)
        }
        if (result) {
            return this.createMessage('success', '代码已经复制到剪贴板！');
        } else {
            return this.createMessage('error', '代码复制失败，请使用Chrome浏览器');
        }
    }

    viewCode() {
        this.showCode = true;
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

    ngOnDestroy() {
        this.subject.unsubscribe();
    }
}
