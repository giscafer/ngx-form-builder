---
widget: table
title: 表格table
inherit: true
---

展示行列数据。表格小部件使用的方式和别的不一样，表格单独作为 schema 的属性，不是放在 properties 下


## Schema

参数 | 说明 | 类型 | 默认值
----|------|-----|------
columns | 字段展示，用`-`间隔，为`字段展示名称label-字段名`  | `string` | -
data | 展示数据，是一个对象数组 | `Array` | -


## Demo

**配置举例**

```json
{
    "提示": "以下token和接口url必填",
    "token": "7f200d9bbc87e6e9440b",
    "url": "https://localhost:3000/project/11/interface/api/30"
}
```
