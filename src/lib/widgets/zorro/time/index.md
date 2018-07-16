---
widget: time
title: 时间选择器
inherit: true
---

一般用于时间选择。`"widget":"time"`

## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
type | 值类型  | `string` | - 
placeholder | 在文字框中显示提示讯息  | `string` | -
readOnly | 是否禁用选择状态  | `boolean` | -
widget | 组件  | `time` | - 
format | 日期格式  | `string` | "HH:mm:ss"、"HH:mm"、"mm:ss" |

 
## Demo

**配置举例**

```json

{
	"datetime": {
		"type": "string",
		"widget": "time",
		"title": "时间选择",
		"placeholder": "请选择"
    }
}
```
