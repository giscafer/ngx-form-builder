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
}
