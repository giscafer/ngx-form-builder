---
widget: select
title: 选择器
inherit: true
---

选择器小部件，一般用于选择操作。


## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
type | 等同 input 的 `type` 值，如果用密码框则`"widget":"password"`  | `string` | -
placeholder | 在文字框中显示提示信息  | `string` | -
maxLength | 表单最大长度  | `number` | -
minLength | 表单最小长度  | `number` | -
readOnly | 是否只读状态  | `boolean` | -

## Demo

**配置举例**

```json
 {
       "categories": {
        "type": "string",
        "widget": "select",
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
