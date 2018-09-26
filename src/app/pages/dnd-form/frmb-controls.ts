

export const FRMB_CONTROL_LIST = [
    { label: 'Button', icon: 'icon-button', widget: 'button' },
    { label: 'Text Field', icon: 'icon-text', widget: 'string' },
    { label: 'Text Area', icon: 'icon-textarea', widget: 'areatext' },
    { label: 'Select', icon: 'icon-select', widget: 'select' },
    { label: 'Autocomplete', icon: 'icon-autocomplete' },
    { label: 'Checkbox Group', icon: 'icon-checkbox' },
    { label: 'Date Field', icon: 'icon-date' },
    { label: 'File Upload', icon: 'icon-file' },
    { label: 'Header', icon: 'icon-header' },
    { label: 'Hidden Input', icon: 'icon-hidden' },
    { label: 'Paragraph', icon: 'icon-paragraph' },
    { label: 'Number', icon: 'icon-number' },
    { label: 'Radio Group', icon: 'icon-radio' },
]



export interface Grid {
    colNum: number;
    colGutter?: number;
}

export const ColNumList = [
    { label: '1 column', value: 1 },
    { label: '2 columns', value: 2 },
    { label: '3 columns', value: 3 },
    { label: '4 columns', value: 4 },
    { label: '6 columns', value: 6 }
]


export const text = `
{
    "debug": "true",
    "layout": "horizontal",
    "grid": {
        "span_label": 5,
        "span_control": 16
    },
    "properties": {
        "name": {
            "type": "string",
            "title": "用户名",
            "placeholder": "请输入用户名，且2位以上",
            "minLength": 2
        },
        "password": {
            "type": "string",
            "widget": "password",
            "title": "密码",
            "placeholder": "请输入密码，且6位以上",
            "minLength": 6
        }
    },
    "required": [
        "name",
        "password"
    ],
    "button": {
        "grid": {
            "offset": 5
        },
        "items": [
            {
                "label": "登录",
                "id": "send",
                "type": "primary",
                "submit": true
            },
            {
                "label": "重置",
                "id": "reset"
            }
        ]
    }
}`