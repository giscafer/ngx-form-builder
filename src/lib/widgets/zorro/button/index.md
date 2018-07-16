---
widget: button
title: 按钮
---

按钮用于提交或重置操作。

## `button` Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
items | 按钮组  | `any[]` | -

### `items` 参数

参数 | 说明 | 类型 | 默认值
----|------|-----|------
id | 编号  | `string` | -
label | 按钮文本  | `string` | -
submit | 是否提交按钮，`true` 时校验结果 `invalid` 时为禁止状态且类型为 `primary`  | `boolean` | -
type | 按钮类型  | `primary,default,dashed,danger` | -

## Demo

**基础**

```ts
"button": {
    "grid": {
        "md": {
            "offset": 20,
            "span": 4
        }
    },
    "items": [{
            "label": "查询",
            "id": "query",
            "type": "primary",
            "submit": true
        },
        {
            "label": "清空",
            "id": "reset"
        }
    ]
}
```
