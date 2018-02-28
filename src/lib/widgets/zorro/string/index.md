---
widget: string
title: 文本框
inherit: true
---

文本框小部件，一般用于字符串元素。


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
        "name": {
            "type": "string",
            "title": "用户名",
            "placeholder": "请输入用户名，且2位以上",
            "minLength": 2
        },
        "password": {
            "type": "string",
            "widget": "password",
            "title": "密码",
            "placeholder": "请输入密码，且6位以上",
            "minLength": 6
        },
        "email": {
            "type": "string",
            "placeholder": "请输入邮箱，最多20个字符",
            "maxLength": 20 
        }
 }
```
