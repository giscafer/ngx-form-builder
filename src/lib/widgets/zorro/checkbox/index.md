---
widget: checkbox
title: 多选框
inherit: true
---


## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
type | 值类型，如果`type:"array"`则使用`nz-checkbox-group`渲染 | `boolean` | - 
readOnly | 是否为禁用状态  | `boolean` | -
widget | 组件  | `checkbox` | - 
description | 描述文字 | `string` | - 
default | 默认值 | `boolean` | - 

 
## Demo

**配置举例**，`categories`配置为`nz-checkbox-group`渲染

```json

{
	"checked": {
        "type": "boolean",
        "widget": "checkbox",
		"description": "I agree to the Terms of Service and the Privacy Policy?"
	},
	"checked1": {
        "type": "boolean",
        "widget": "checkbox",
		"readOnly": true,
		"description": "不可选 - Disabled."
    },
    "categories": {
        "type": "array",
        "title": "Categories",
        "items": {
            "type": "string",
            "oneOf": [
                {
                    "description": "Dog",
                    "enum": [
                        "dog"
                    ]
                },
                {
                    "description": "Cat",
                    "enum": [
                        "cat"
                    ]
                },
                {
                    "description": "Daulphin",
                    "enum": [
                        "daulphin"
                    ]
                }
            ]
        },
        "widget": "checkbox"
    }
}

```
