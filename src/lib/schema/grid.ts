export interface IGrid {
    /**
     * bootstrap：col-md-4
     * zorro-antd：ant-col-xs-5 ant-col-xs-offset-1 ant-col-lg-6 ant-col-lg-offset-2
     * nzXXl="6" nzXl="8" nzLg="8" nzMd="12" nzSm="24" nzXs="24"
     */
    xs: number | ICol;
    sm: number | ICol;
    md: number | ICol;
    lg: number | ICol;
    xl: number | ICol;
    xxl: number | ICol;
    // 栅格相关
    /**
     * 栅格列数
     */
    col_num: number;
    /**
    * 栅格间隔
    */
    col_gutter: number;

    // 外部统一控制form-item的nzSpan和offset值
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

interface ICol {
    /**
   * 垂直、水平、和内嵌模式:`vertical` `horizontal` `inline`
   */
    mode?: string;
    /**
     * 栅格顺序，`flex` 布局模式下有效
     */
    order?: number;
    /**
     * 栅格左侧的间隔格数，间隔内不可以有栅格
     */
    offset?: number;
    /**
     * 栅格间隔
     */
    gutter?: number;
    /**
     * 栅格占位格数，为 0 时相当于 display: none
     */
    span?: number;
    /**
     * 	栅格向右移动格数
     */
    push?: number;
    /**
     * 栅格向左移动格数
     */
    pull?: number;
}