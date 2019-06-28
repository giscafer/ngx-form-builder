import { AfterViewInit, Component, ViewChild, OnDestroy } from '@angular/core';
import * as copy from 'copy-text-to-clipboard';
import { AceEditorDirective } from 'ngx-ace-tern';
import { NzMessageService } from 'ng-zorro-antd';
import { funDownload } from '../../utils/download';
import { formatTime } from '../../utils/formatTime';
import { initSplitEventHandler } from '../../utils/setSplitPosition';
import { StartUpService } from '../../services/startup.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-bootstrap-form',
    templateUrl: './bootstrap-form.component.html',
    styleUrls: []
})
export class BootstrapFormComponent implements AfterViewInit, OnDestroy {
    @ViewChild(AceEditorDirective, { static: false })
    private editorDirective: AceEditorDirective;
    // schema
    actions = {};

    // form builder
    model: any;
    value: any;
    htmlCode: string;
    schemaString: any = '';
    schemaJson: any = {};
    count = 1;
    builderInfo = {
        msgType: 'info',
        msg: '',
        finishTime: '',
        _startTime: 0,
        _endTime: 0
    };
    demoName: string;
    // ace
    text = 'test';
    aceOptions = {
        printMargin: false,
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
    };

    subject: Subscription;
    createMessage = (type, text) => {
        this._message.create(type, `${text}`);
    };

    constructor(
        private _message: NzMessageService,
        private service: StartUpService
    ) {
        this.subject = this.service.mockChanged.subscribe(evt => {
            console.log(evt);
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
        });
    }

    toggleSchema(type) {
        switch (type) {
            case 'simple':
                this.demoName = 'Simple Example';
                this.schemaString = JSON.stringify(
                    this.service.getData('personInfoMockData'),
                    null,
                    4
                );
                break;
            case 'other':
                this.demoName = 'Simple Example2';
                this.schemaString = JSON.stringify(
                    this.service.getData('otherschemaMockData'),
                    null,
                    4
                );
                break;
            case 'grid':
                this.demoName = 'Grid Layout Example';
                this.schemaString = JSON.stringify(
                    this.service.getData('personInfoGridMockData'),
                    null,
                    4
                );
                break;
            case 'full':
                this.demoName = 'Full Widget Example';
                this.schemaString = JSON.stringify(
                    this.service.getData('sampleschemaMockData'),
                    null,
                    4
                );
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
        this.log(
            `页面构建完成，${this.builderInfo._endTime -
                this.builderInfo._startTime}ms`,
            'info'
        );
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

    copyHTMLCode(type?: number) {
        if (type === 1) {
            if ('download' in document.createElement('a')) {
                funDownload(this.htmlCode);
            } else {
                return this.createMessage(
                    'error',
                    '代码下载失败，请使用 Chrome 浏览器'
                );
            }
            return this.createMessage('success', '文件下载成功！');
        }
        if (copy(this.htmlCode)) {
            return this.createMessage('success', '代码已经复制到剪贴板！');
        } else {
            return this.createMessage(
                'error',
                '代码复制失败，请使用Chrome浏览器'
            );
        }
    }

    private hasEditorError() {
        var annotations = this.editorDirective.editor
            .getSession()
            .getAnnotations();
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
