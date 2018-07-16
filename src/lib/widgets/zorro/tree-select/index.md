---
widget: tree-select
title: 树形选择器
inherit: true
---

树型选择控件。`"widget":"tree-select" (暂不支持数据渲染)` 


## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
type | `"widget":"tree-select"`  | `string` | -
placeholder | 在文字框中显示提示信息  | `string` | -
readOnly | 是否只读状态  | `boolean` | -
description | 描述文字 | `string` | - 

## Demo

**配置举例**

```json
 {
       "categories": {
        "type": "string",
        "widget": "tree-select",
        "title": "Categories"
    }
 }
```
