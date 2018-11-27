
function getMd(md: string) {
    const arr = md.split('---');
    return arr.length > 2 && arr[0] === '' ? arr.slice(2).join('---') : md;
}

export const DATA = {
    basic: [
        {
            id: 'getting-started',
            title: '开始使用',
            content: getMd(require('!!raw-loader!./guide/getting-started.md'))
        },
        {
            id: 'schema',
            title: 'Schema',
            content: getMd(require('!!raw-loader!./guide/schema.md'))
        },
        {
            id: 'yapi',
            title: 'Yapi 接口自动生成页面',
            content: getMd(require('!!raw-loader!./guide/yapi.md'))
        }
    ],
    widgets: [
        {
            id: 'string',
            title: '字符串',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/string/index.md'))
        },
        {
            id: 'button',
            title: '按钮',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/button/index.md'))
        },
        {
            id: 'textarea',
            title: '多行文本框',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/textarea/index.md'))
        },
        {
            id: 'checkbox',
            title: '多选框',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/checkbox/index.md'))
        },
        {
            id: 'radio',
            title: '单选框',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/radio/index.md'))
        },
        {
            id: 'date',
            title: '日期',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/date/index.md'))
        },
        {
            id: 'date-range',
            title: '日期范围',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/date-range/index.md'))
        },
        {
            id: 'time',
            title: '时间',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/time/index.md'))
        },
        {
            id: 'select',
            title: '选择器',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/select/index.md'))
        },
        {
            id: 'tree-select',
            title: '树形选择器',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/tree-select/index.md'))
        }, {
            id: 'table',
            title: '表格',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/table/index.md'))
        }, {
            id: 'yzt-grid',
            title: 'YZT表格',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/yzt-grid/index.md'))
        }
        /* ,
        {
            id: 'rate',
            title: '评分',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/rate/index.md'))
        },
        {
            id: 'range',
            title: '滑动输入条',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/range/index.md'))
        },
        {
            id: 'file',
            title: '文件上传',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/file/index.md'))
        },
        {
            id: 'cascader',
            title: '级联选择',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/cascader/index.md'))
        },
        {
            id: 'transfer',
            title: '穿梭框',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/transfer/index.md'))
        },
        {
            id: 'tag',
            title: '热门标签',
            content: getMd(require('!!raw-loader!../../lib/widgets/zorro/tag/index.md'))
        } */
    ]
};
