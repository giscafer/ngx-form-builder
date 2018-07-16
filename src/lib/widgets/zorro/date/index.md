---
widget: date
title: 日期选择器
inherit: true
---

一般用于日期选择。`"widget":"date"`

## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
type | 值类型  | `string` | - 
placeholder | 在文字框中显示提示讯息  | `string` | -
readOnly | 是否只读状态  | `boolean` | -
widget | 组件  | `date` | - 
format | 日期格式  | `string` | "YYYY-MM-DD" 
showTime | 是否显示时间选择器 | `boolean` | `false`

 
## Demo

**配置举例**

```json

{
	"birthday": {
		"type": "string",
		"title": "日期",
		"widget":"date",
		"format": "YYYY/MM/DD"
	},
	"date1": {
		"type": "number",
		"title": "时间戳",
		"default": 1519787043107,
		"widget":"date",
		"format": "YYYY/MM/DD"
	},
	"date2": {
		"type": "string",
		"title": "ISO日期",
		"default": "2018-02-28T17:16:27.113Z",
		"widget":"date",
		"format": "YYYY/MM/DD"
	},
	"date3": {
		"type": "string",
		"title": "年月日",
		"default": "2018/02/28",
		"widget":"date",
		"format": "YYYY/MM/DD"
	}
}
```
