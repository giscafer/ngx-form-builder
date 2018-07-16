---
order: 5
title: Schema
type: Basic
---

## 常规Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
debug | 会在控制台打印相关校验过程 | `boolean` | -
type | 数据类型，支持 JavaScript 基础类型 | `number,string,boolean,object,array` | `object`
style | 自定义样式，等同 `[ngStyle]` 值  | `object` | -
grid | 响应式属性  | `SFGrid` | -
modelName | 双向数据绑定值的model对象名称 | `string` | `testModel`
fileName | 自定义模板文件名称 | `string` | `template`

<br>

**type注意事项**

- JSON 中 `date` 等同 `string` 类型
- 指定 `format` 标准参数可以自动适配渲染小部件
- 指定 `widget` 参数强制渲染小部件
<br>

## 渲染Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
widget | 指定采用什么小部件渲染数据  | `string,WidgetData` | -
title | 表单标题，等同 `label`  | `string` | -
description | 表单描述  | `string` | -
showDescription | 是否展示 `description`  | `boolean` | `false`
default | 默认值  | `any` | -
size | 控件大小  | `large,default,small` | `large`
disabled | 是否禁用状态  | `boolean` | -


## 小部件Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
id | 小部件名称  | `string` | -
placeholder | 文字框中显示提示信息  | `string` | -
extra | 用于显示表单额外提示信息  | `string` | -

> 每一个小部件会有相应UI参数，请参考相应小部件文档。

## 响应式Schema

`grid` 属性等同完整的 [Grid栅格系统](http://ng.ant.design/components/grid/zh)，透过 `grid` 可以决定表单如何渲染。

参数 | 说明 | 类型 | 默认值
----|------|-----|------
mode |  垂直、水平、和内嵌模式:`vertical` `horizontal` `inline`  | `vertical` | -
offset | 栅格左侧的间隔格数，间隔内不可以有栅格  | `number` | -
gutter | 栅格间隔  | `number` | -
span | 每个表单元素栅格占位格数，为 `0` 时相当于 `display: none`  | `number` | -
xs | `<576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -
sm | `≥576px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -
md | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -
lg | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -
xl | `1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象  | `number, Object` | -
xxl |  `≥1600px`响应式栅格，可为栅格数或一个包含其他属性的对象 | `number, Object` | -

## 水平布局Schema

> 务必二者总和为 `24`

参数 | 说明 | 类型 | 默认值
----|------|-----|------
span_label | `label` 所占栅格数  | `number` | 5
span_control | 表单控件所占栅格数  | `number` | 19
offset_control | `control` 栅格左侧的间隔格数，间隔内不可以有栅格  | `number` | -
span_label_fixed | `label` 固定宽度  | `number` | -
