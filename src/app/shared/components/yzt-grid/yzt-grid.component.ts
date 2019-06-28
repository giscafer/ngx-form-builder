import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    Input,
    NgModule,
    Output,
    TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DirectivesModule } from '../../directives/yzt-directives.modules';
import { GridUtilService } from './share/grid-util.service';
import * as _ from 'lodash';

export interface PageData {
    content: Array<any>;
    numberOfElements: number;
    [portName: string]: any;
}

class GridIconIF {
    field: '';
    prop: '';
    iconTemplate: TemplateRef<any>;
}

export interface PageIndexAndSize {
    page: number;
    size: number;
}

@Component({
    selector: `yzt-grid`,
    templateUrl: `yzt-grid.component.html`,
    styleUrls: [`yzt-grid.component.scss`]
})
export class UIGridComponent {
    @ViewChild('gridImg', { read: ViewContainerRef, static: false })
    gridImg: ViewContainerRef;
    @ViewChild('nzTable', { static: false }) nzTable: any;
    _scroll: { x: string; y: string } = { x: null, y: null };
    _data: PageData = { content: [], numberOfElements: 0 };
    _dataSet = [];
    _selections: any;
    _loading = false;
    set loading(v: boolean) {
        this._loading = !!v;
    }
    _fixScrollY: string | number;
    _title = '';
    _titleTpl: TemplateRef<any>; // thead上方
    _extraTitleTpl: TemplateRef<any> = null; // 表格thead和tbody之间
    _custom_popoverTpl: TemplateRef<any>;
    _exportLoading = false;
    _editCol = false;
    //用于存放可选列
    targetColumns: any[] = [];
    //备份完整columns
    editColumns: any[] = [];
    //grid表格按钮控制
    buttonGather = {
        showEditColumn: false,
        enableExport: false
    };
    // 排序
    _sortName = null;
    _sortValue = null;

    set pageIndex(num) {
        if (this._page === num) return;
        this._page = num;
    }
    get pageIndex() {
        return this._page;
    }

    // 支持双向数据绑定
    @Input() set pageSize(num) {
        if (this._size === num) return;
        this._size = num;
    }
    get pageSize() {
        return this._size;
    }

    _page = 1;
    _size = 10;
    // 缓存上一次分页信息，控制避免多次请求接口
    private _pageIndex = 1;
    private _pageSize = 1;
    /**
     * 控制多选
     */
    _allChecked = false;
    _indeterminate = false;
    _displayData = [];
    // 自定义图片实例
    _iconComp = {};
    // 自定义单元格
    _customComp: { [k: string]: any } = {};
    // 表头搜索
    _searchCustom: { [k: string]: TemplateRef<any> } = {};
    _hasSearch: boolean;
    // 存储转换后的卡片字符串
    _popoverStr = '';
    _popoverArr = [];
    _fieldGather = {};

    set editCol(show: boolean) {
        if (show) {
            this.editColumns = [...this.columns, ...this.targetColumns];
        }
        this._editCol = show;
    }

    @Output() load: EventEmitter<PageIndexAndSize> = new EventEmitter();
    @Output() selectionChange: EventEmitter<any> = new EventEmitter();
    @Output() cellClick: EventEmitter<any> = new EventEmitter();
    @Output() cellOver: EventEmitter<any> = new EventEmitter();
    @Output() exportCSV: EventEmitter<any> = new EventEmitter();
    @Output() filterData: EventEmitter<any> = new EventEmitter(); // 过滤后数据输出

    @Input() id: string;
    @Input() customClass: string;
    @Input() columns = [];
    @Input() showSizeChanger = false; // 未知用途
    @Input() showPagination = true; // 是否显示分页
    @Input() pageSizeValues = [10, 30, 50, 100];
    @Input() showTitle = true;
    @Input() mulitipy = false; // 是否多选
    @Input() hideCheck = false; // 是否有全选选择框
    @Input() isSyncData = true;
    // 根据行状态更换行颜色，usage: {field: "status", normal: "normal"},
    // normal对应的值是数据中status的值
    @Input() colColor = {
        field: '', // 必填项
        normal: '',
        unnormal: '',
        // 时效预警
        prewarning: '',
        warning: '',
        timeOut: '',
        // 删除
        delete: ''
    };

    @Input()
    set scroll(value: { x: string; y: string }) {
        if (value) {
            this._scroll = value;
        } else {
            this._scroll = { x: null, y: null };
        }
        //   this.cdr.detectChanges();
    }

    @Input()
    set data(value: PageData) {
        setTimeout(_ => {
            this._loading = false;
        });
        if (!value) return;
        // 手动调用查询，解决分页问题
        if (value.size) {
            this.pageSize = value.size;
            this.pageIndex = value.number + 1;
            this._pageIndex = this.pageIndex; // 控制查询的时候，引起的pageIndexChange事件造成走两次接口
            this._pageSize = this.pageSize; // 控制查询的时候，引起的pageSizeChange事件造成走两次接口
        }
        let content = value['content'] || [];
        // 优化性能。避免鼠标事件触发表格数据重复计算或者赋值
        for (let row of content) {
            const columns = [].concat(this.columns).concat(this.targetColumns);
            for (let c of columns) {
                let fieldValue = _.get(row, c.field, ''); // 兼容后端返回数据结构，eg:c.field="shipper.clientType"
                if (!c.field) {
                    continue;
                }
                row[c.field] = fieldValue;
                let textLen = Number(c.textLength) ? c.textLength : 20;
                // 字段过长缩写
                if (fieldValue.length > textLen) {
                    row[c.field + '_short_'] = this.replaceTextOmit(
                        fieldValue,
                        textLen,
                        ''
                    );
                }
                // mergeName 数组合并
                if (c.popover) {
                    row[c.field + '_popover_'] = this.replaceTextOmit(
                        fieldValue,
                        textLen,
                        c.popover
                    );
                    // _.set(row, c.field + '_popover_arr_', this.splitName(fieldValue, c.popover));
                }
            }
        }
        this._displayData = value['content'] = content;
        this._data = { ...value };
        // 如果用户有进行排序动作，后续查询也该按当前排序记录进行排序
        if (this._sortName && this._sortValue) this.search();
    }

    get data(): PageData {
        return this._data;
    }

    /*  get fieldValue(row:Object,fieldName:string){
      if()
   } */

    @Input()
    set fixScroll(height: any) {
        this._fixScrollY = `${parseInt(height)}px`;
    }

    // 设置头部
    @Input()
    set title(value: string | TemplateRef<void>) {
        if (value instanceof TemplateRef) {
            this._titleTpl = value;
        } else {
            this._title = value;
        }
    }

    // 设置表格行下方区域,表格thead和tbody之间
    @Input()
    set extraTitle(value: string | TemplateRef<void>) {
        if (value instanceof TemplateRef) {
            this._extraTitleTpl = value;
        }
    }

    // 设置卡片
    @Input() set csPopover(value: TemplateRef<void>) {
        this._custom_popoverTpl = value;
    }

    // 设置搜索
    @Input()
    set searchTmpl(templs: any) {
        if (Array.isArray(templs)) {
            let ref;
            templs.forEach((templ, i) => {
                ref = Object.keys(templ._def.references)[0]
                    .split('_')[1]
                    .toString();
                Object.defineProperty(this._searchCustom, ref, {
                    value: templ
                });
            });
        }
        this._hasSearch = arguments ? true : false;
    }

    @Input()
    set selection(value: Array<any>) {
        // 单选接受一个对象多选接受数组
        if (!this.util.isEqual(this._selections, value)) {
            if (!value.length) {
                this._displayData.forEach(data => {
                    data.checked = false;
                });
                this._indeterminate = false;
                this._allChecked = false;
            }
            this._selections = value;
            this.selectionChange.emit(value);
        }
    }

    constructor(private util: GridUtilService, public _vcr: ViewContainerRef) {}

    ngOnInit() {
        if (this.id) {
            let columnsMap = localStorage[this.id];
            if (columnsMap) {
                columnsMap = JSON.parse(columnsMap);
                let sourceColumns = columnsMap['sourceColumns'];
                let targetColumns = columnsMap['targetColumns'];
                if (
                    sourceColumns &&
                    targetColumns &&
                    this.util.generateColumnKey([
                        ...sourceColumns,
                        ...targetColumns
                    ]) === this.util.generateColumnKey(this.columns)
                ) {
                    this.columns = sourceColumns;
                    this.targetColumns = targetColumns;
                }
            }
        }
        this.editColumns = this.columns;
        this.editColumns.forEach((column, i) => {
            Object.defineProperties(column, {
                title: { value: column.header },
                disabled: { value: column.transferVisabled || false }
            });
        });
    }

    ngAfterViewInit() {
        setTimeout(_ => {
            this.onLazyLoad();
        });
    }

    ngOnChanges() {}

    ngOnDestroy() {
        if (this.id) {
            localStorage[this.id] = JSON.stringify({
                sourceColumns: this.columns,
                targetColumns: this.targetColumns
            });
        }
    }

    /**page index change event handler */
    nzPageIndexChange($event) {
        setTimeout(() => {
            if (this._pageIndex === $event) {
                return;
            }
            this.onLazyLoad();
            this._pageIndex = $event;
        });
    }

    pageSizeChange($event) {
        // 控制size改变，引起pageIndex变化而产生多次请求
        if (this._pageIndex !== this.pageIndex) {
            return;
        }
        setTimeout(() => {
            if (this._pageSize === $event) {
                return;
            }
            this.onLazyLoad();
        });
    }

    isNeedSearch(column: any) {
        for (let value in column) {
            if (column[value] && column[value].indexOf('search_') !== -1)
                return column[value].split('_')[1];
        }
        return 0;
    }

    editChange(change: any) {
        let originChange = change,
            items = originChange.list;

        items.forEach((item, index) => {
            if (change.from === 'left') {
                this.editColumns.forEach(column => {
                    if (
                        item['field'] === column['field'] &&
                        column.direction !== 'right'
                    )
                        column.direction = 'right';
                });
            } else {
                this.targetColumns.forEach(column => {
                    if (
                        item['field'] === column['field'] &&
                        column.direction === 'right'
                    )
                        column.direction = 'left';
                });
            }
        });

        this.columns = this.editColumns.filter(
            column => column.direction !== 'right'
        );
        this.targetColumns = this.editColumns.filter(
            column => column.direction === 'right'
        );
        // 重新赋值，保证穿梭框排序保持最新一次
        this.editColumns = [...this.columns, ...this.targetColumns];
    }

    onLazyLoad(
        page: PageIndexAndSize = { page: this.pageIndex, size: this.pageSize }
    ): any {
        /*   if (this.isSyncData) {
        this._loading = true;
      } */
        this.load.emit(page);
    }

    getIconInstance({ outField, outProp, iconTemplate }) {
        this._iconComp[outField] = {
            outField: outField || '',
            outProp: outProp || '',
            iconTemplate: iconTemplate || ''
        };
    }

    getCusTmplInstance({ outField, customTemplate }) {
        this._customComp[outField] = {
            outField: outField || '',
            customTemplate: customTemplate || ''
        };
    }

    /**
     * 记录选择事件
     * @param rows
     */
    onRowSelectChange(data: any, index, pageData) {
        if (this.mulitipy) {
            pageData.map(item => {
                item.checked = false;
            });
            data.checked = !data.checked;
        } else {
            for (let i = 0; i < pageData.length; ++i) {
                if (i === index && data.checked) return;
            }
            data.checked = !data.checked;
        }

        this.mulitipy
            ? this.refreshStatus()
            : this.refreshSingleStatus(null, this._data.content, index);

        return false;
    }

    /**
     * 选择checkbox
     */
    refreshStatus(event?: MouseEvent) {
        if (event) {
            event.stopPropagation();
        }
        const selections = this._displayData.filter(
            value => value.checked === true
        );
        const allChecked = this._displayData.every(
            value => value.checked === true
        );
        const allUnChecked = this._displayData.every(value => !value.checked);
        this._allChecked = allChecked;
        this._indeterminate = !allChecked && !allUnChecked;
        this.selection = selections;
    }

    refreshSingleStatus(event: MouseEvent, data, index: number) {
        if (event) {
            event.stopPropagation();
        }
        data.forEach((val, i) => {
            if (index === i) return;
            val.checked = false;
        });
        this.selection = data.filter(v => v.checked);
    }

    /**
     * 全选和反选
     * @param value
     * @param data
     */
    checkAll(value, data: Array<any>) {
        if (value) {
            this._displayData.forEach(data => {
                data.checked = true;
            });
        } else {
            this._displayData.forEach(data => {
                data.checked = false;
            });
        }
        this.refreshStatus();
    }

    /**
     * cell点击事件
     * @param event
     * @param row
     * @param field
     */
    onCellClick(event: Event, row: any, field: any) {
        event.stopPropagation();
        let value = row[field];
        this.cellClick.emit({
            row: row,
            field: field,
            value: value,
            originalEvent: event
        });
    }

    /**
     * 鼠标mouseenter事件
     */
    onCellMouseEnter(event: any, row: any, field: any) {
        event.stopPropagation();
        // let value = this.value(row, field);
        let value = row[field];
        this.cellOver.emit({
            row: row,
            field: field,
            value: value,
            originalEvent: event
        });
    }

    /**
     * 数据转为字符串
     * @param val
     * @returns {any}
     * @constructor
     */
    dataToStr(val: any) {
        let resultData;
        if (typeof val == 'number') {
            resultData = val.toString();
        } else if (typeof val == 'undefined') {
            resultData = '';
        } else if (val == null) {
            resultData = '';
        } else if (typeof val == 'object') {
            resultData = JSON.stringify(val);
        } else if (typeof val == 'boolean') {
            resultData = val ? '是' : '否';
        } else {
            resultData = val;
        }
        return resultData;
    }

    /**
     * 对有textLength属性的column进行字节数量控制
     * @param val
     * @param textLength
     * @param mergeName 控制popover弹窗,传需要合并的key,eg: [{a: '床'},{a: '被子'}] ,此处mergeName传'a'
     * @returns {string|void|any}
     */
    replaceTextOmit(val: any, textLength: number = 20, mergeName = '') {
        let resultData, temp;
        resultData = this.dataToStr(val);
        if (Object.prototype.toString.call(val) === '[object Array]') {
            let namesArr = _.map(val, mergeName),
                namesStr = namesArr.join(',');
            temp = namesStr.slice(0, textLength);
            return namesStr.length > textLength ? `${temp}...` : namesStr;
        }

        if (typeof resultData === 'string') {
            temp = resultData.slice(0, textLength);
            return resultData.length > textLength ? `${temp}...` : resultData;
        } else {
            return resultData;
        }
    }

    /**
     * 字符串转数组，逗号隔开, popover在表格中有性能问题，
     * 会触发两次导致第一次会显示表格中最后一个单元格的值再显示想显示的popover数组
     * 临时解决办法必须在html模板中传val值，估计是多次触发表格的变化检测
     */
    splitName(val, mergeName = '') {
        let result;
        if (Object.prototype.toString.call(val) === '[object Array]') {
            let namesArr = _.map(val, mergeName),
                namesStr = namesArr.join(',');
            result = namesStr;
        } else if (typeof val === 'string') {
            result = val;
        }
        let reg = /[,，]/g;
        result = result.replace(reg, ',');
        return _.compact(result.split(',')) || [];
    }

    /**
     *
     * @param grid
     * @param data
     * @param isFailed 失败了
     */
    doExportCSV(grid, data, isFailed?: boolean) {
        grid.exportDisable = false;
        if (isFailed) {
            return;
        }
        let columns = grid.columns;
        var csv = '\ufeff';
        //headers
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].field && !columns[i].hidden) {
                csv += '"' + (columns[i].header || columns[i].field) + '"';
                if (i < columns.length - 1) {
                    csv += ',';
                }
            }
        }
        //body
        data.forEach(function(record, i) {
            csv += '\n';
            for (var i_1 = 0; i_1 < columns.length; i_1++) {
                if (columns[i_1].field && !columns[i_1].hidden) {
                    let value = Object.defineProperty(
                        record,
                        columns[i_1].field,
                        null
                    );
                    if (typeof value === 'string') {
                        value = value.replace('"', '""');
                    } else if (
                        value === null ||
                        value === 'null' ||
                        value === 'undefined'
                    ) {
                        value = '';
                    }
                    if (!isNaN(Number(value)) && value.length > 12) {
                        csv += '"' + value + '\ufeff"';
                    } else {
                        csv += '"' + value + '"';
                    }
                    if (i_1 < columns.length - 1) {
                        csv += ',';
                    }
                }
            }
        });
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, '导出.csv');
        } else {
            var link = document.createElement('a');
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', '导出.csv');
                link.click();
            } else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    }

    exportDisable = false;

    exportCSVIntenal() {
        let $this = this;
        this.exportDisable = true;
        this.exportCSV.emit({
            done: $this.doExportCSV,
            grid: $this
        });
    }

    /**
     * 根据状态判断行颜色，配合colColor属性
     * @param status 对应数据属性
     */
    getColColor(status) {
        if (!this.colColor.field) return;
        switch (status) {
            case this.colColor.normal:
                return '#000000a6';
            case this.colColor.delete:
                return '#f04134';
            // case this.colColor.prewarning:
            //     return "origin";
            // case this.colColor.warning:
            //     return "green";
            // case this.colColor.timeOut:
            //     return "#000";
            default:
                return '#000000a6';
        }
    }

    // 前端过滤
    search() {
        let searchObj = {};
        for (let field in this._fieldGather) {
            if (this._fieldGather[field].trim()) {
                Object.defineProperty(searchObj, field, {
                    value: this._fieldGather[field],
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
        }
        if (!Object.keys(searchObj).length) {
            this._displayData = [...this.data['content']];
        } else {
            this._displayData = this.data['content'].filter(item => {
                let flag = false;
                for (let key in searchObj) {
                    if (item[key].toString().indexOf(searchObj[key]) !== -1) {
                        flag = !flag;
                        break;
                    }
                }
                return flag;
            });
        }
        // 具体参考https://ng-zorro.github.io/components/table/zh#components-table-demo-head
        if (this._sortName && this._sortValue) {
            this._displayData = this._displayData.sort((a, b) =>
                this._sortValue === 'ascend'
                    ? a[this._sortName] > b[this._sortName]
                        ? 1
                        : -1
                    : b[this._sortName] > a[this._sortName]
                    ? 1
                    : -1
            );
        }
        this.filterData.emit({ content: this._displayData });
    }

    // 列表排序
    sort(sort: { key: string; value: string }): void {
        this._sortName = sort.key;
        this._sortValue = sort.value;
        this.search();
    }
}

@NgModule({
    imports: [CommonModule, FormsModule, NgZorroAntdModule, DirectivesModule],
    declarations: [UIGridComponent],
    providers: [GridUtilService],
    exports: [UIGridComponent]
})
export class UIGridModule {}
