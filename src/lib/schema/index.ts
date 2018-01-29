import { ISchemaProperty } from './property';

export { WidgetType } from './widget-type'

export {ISchemaProperty}  from './property';

export interface ISchema extends ISchemaProperty {
    /**
     * 调式模式
     */
    debug?: boolean;
    properties?: { [key: string]: ISchema };
}
