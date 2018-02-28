import { IGrid } from "./grid";

export interface IRenderSchema {
    /**
     * 栅格布局
     */
    grid?: IGrid;
    /**
     * 渲染样式类
     */
    class?: string | string[];
    /**
     * 渲染style
     */
    style?: string | Object;

    // 栅格相关
    /**
     * 栅格列数
     */
    col_num: number;
    /**
    * 栅格间隔
    */
    col_gutter: number;
    /**
     * label 的nzSpan值
     */
    span_label: number;
    /**
    * input control 的nzSpan值
    */
    span_control: number;
    /**
    *  input control 的offset值
    */
    offset_control: number;
}
