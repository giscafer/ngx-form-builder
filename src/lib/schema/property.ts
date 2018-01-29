import { ISchema } from "./index";



export interface ISchemaProperty {
    /**
     * ngModel 绑定对象名称，默认值为 model
     */
    modelName?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * ngModel 绑定属性，和 property 名称一致
     */
    name?: string;
    /**
     * 枚举
     */
    enum?: string[];
    /**
     * `widget`渲染类型
     */
    widget?: string | Object;
    /**
     * input 框中的文字信息
     */
    placeholder?: string;
    /**
     * 输入框字符串最小长度
     */
    minLength?: number;
    /**
     * 输入框字符串最大长度
     */
    maxLength?: string;
    /**
     * `label`标题
     */
    title?: string;
    /**
     * 提示描述信息
     */
    description?: string;
    /**
     * 默认值
     */
    default?: any;
    /**
    * 最小值
    *
    * 一般用于类型为 `number`和`range`
    */
    minimum?: number;

    /**
    * 最大值
    *
    * 一般用于类型为 `number`和`range`
    */
    maximum?: number;
    /**
     * 是否只读状态
     * 
     * 一般只作用于输入框
     */
    readOnly?: boolean;
    /**
     * 格式化文本方式
     */
    format?: string;
    /**
     * 元素的类型描述
     * 
     * 一般`type`为`array`或`select`时
     */
    items: ISchema;
    /**
     * 值必须是其中之一
     *
     * 一般`type`为`array`或`select`时
     */
    oneOf: ISchema[];
}