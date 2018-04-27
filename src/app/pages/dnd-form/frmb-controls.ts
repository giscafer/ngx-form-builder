

export const FRMB_CONTROL_LIST = [
    { label: 'Autocomplete', icon: 'icon-autocomplete' },
    { label: 'Button', icon: 'icon-button' },
    { label: 'Checkbox Group', icon: 'icon-checkbox' },
    { label: 'Date Field', icon: 'icon-date' },
    { label: 'File Upload', icon: 'icon-file' },
    { label: 'Header', icon: 'icon-header' },
    { label: 'Hidden Input', icon: 'icon-hidden' },
    { label: 'Paragraph', icon: 'icon-paragraph' },
    { label: 'Number', icon: 'icon-number' },
    { label: 'Radio Group', icon: 'icon-radio' },
    { label: 'Select', icon: 'icon-select' },
    { label: 'Text Field', icon: 'icon-text' },
    { label: 'Text Area', icon: 'icon-textarea' },
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