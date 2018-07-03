import { ISchemaProperty } from './property';
import { IRenderSchema } from './render';

export { WidgetType } from './widget-type'

export { ISchemaProperty } from './property';

export interface ISchema extends ISchemaProperty, IRenderSchema {
    /**
     * 调式模式
     */
    debug?: boolean;
    /* 模板组件文件名称，默认为template */
    fileName?: string;
    /**
     * 表单布局方式
     */
    layout?: 'horizontal' | 'vertical' | 'inline';
    properties?: { [key: string]: ISchema };
}
