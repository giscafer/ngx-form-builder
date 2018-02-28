---
widget: date-range
title: 日期选择器
inherit: true
---

默认小部件，一般用于日期选择。

## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
type | 值类型  | `string` | - 
start | 开始placeholder  | `string` | -
end | 结束placeholder  | `string` | -
readOnly | 是否为禁用状态  | `boolean` | -
widget | 组件  | `date-range` | - 
format | 日期格式  | `string` | "YYYY-MM-DD" | 
showTime | 是否显示时间选择器 | `boolean` | `false`

 
## Demo

**各种格式的配置**

```json

{
	"daterange": {
		"type": "string",
		"widget": "date-range",
		"title": "日期段",
		"start": "Select start date",
		"end": "Select end date"
	},
	"daterange2": {
		"type": "string",
		"widget": "date-range",
		"showTime": true,
		"title": "日期段",
		"start": "Select start date",
		"end": "Select end date"
	},
}
```
