---
widget: textarea
title: 多行文本框
inherit: true
---

文本框小部件，一般用于字符串元素。


## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
placeholder | 在文字框中显示提示信息  | `string` | -
autosize | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }`  | `Boolean|Object` | `false`
readOnly | 是否只读状态  | `boolean` | -

## Demo

**配置举例**

```json
 {
        "remark": {
            "type": "string",
            "widget": "textarea",
            "title": "备注",
            "placeholder": "Autosize height with minimum and maximum number of lines"
        }
 }
```
