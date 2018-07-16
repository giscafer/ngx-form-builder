---
widget: select
title: 选择器
inherit: true
---

选择器小部件，一般用于选择操作。`"widget":"select"`


## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
placeholder | 在文字框中显示提示信息  | `string` | -
items | 选项数据对象（见demo）  | `object` | -
readOnly | 是否只读状态  | `boolean` | -
description | 描述文字 | `string` | - 

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
        }
    }
 }
```
