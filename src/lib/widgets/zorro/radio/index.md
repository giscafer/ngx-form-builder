---
widget: radio
title: 单选框
inherit: true
---

单选框 `"widget":"radio"`

## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
type | 值类型，如果`oneOf`为多项选择，则使用`nz-radio-group`渲染 | `boolean` | - 
readOnly | 是否为禁用状态  | `boolean` | -
widget | 组件  | `radio` | - 
oneOf | 选项内容  | `array` | - 
description | 描述文字 | `string` | - 
default | 默认值 | `boolean` | - 

 
## Demo

**配置举例**，`promotions`属性配置为`nz-radio-group`渲染

```json

{
    "promotion": {
        "type": "string",
        "description": "独立使用 true",
        "default":true,
        "widget": "radio"
    },
    "promotions": {
        "type": "string",
        "description": "Promotion",
        "widget": "radio",
        "oneOf": [
            {
                "description": "Student discount (20%)",
                "enum": [
                    "student"
                ]
            },
            {
                "description": "Summer 2016 discount (15%)",
                "enum": [
                    "summer"
                ]
            },
            {
                "description": "None",
                "enum": [
                    "none"
                ]
            }
        ]
    }
}

```
