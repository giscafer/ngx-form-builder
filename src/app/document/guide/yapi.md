---
order: 2
title: Yapi 列表接口自动生成页面
type: Advanced
---

支持 **Yapi 列表分页查询接口** 自动生成前端模板页面。


### 如何使用？


`Zorro Builder` 下，选择`yapi列表自动生成`:

![](https://raw.githubusercontent.com/giscafer/ngx-form-builder/master/src/app/document/images/yapi-sample.png)

复制下边json粘贴到编辑器，点击 `RUN` 运行即可

```js
{
    "提示": "以下token和接口url必填",
    "tableComponent": "yzt-grid",
    "token": "cd54325e00db4aa131f6",
    "url": "https://yapi.1ziton.com/project/11/interface/api/27"
}

```

修改自己项目的token和接口url地址，即可快速创建列表查询页面


**跨域问题注意**

由于域名跨域请求yapi网站接口的缘故，建议安装chrome扩展程序[Allow-Control-Allow-Origin: *](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)，并启用，这样就没问题了。

![](https://raw.githubusercontent.com/giscafer/ngx-form-builder/master/src/app/document/images/cors.png)



### json参数说明

- `token` 项目的token，有OPEN API权限。在YAPI上，选择`项目——>设置——>token配置`中获取token
- `url` 接口地址。打开接口预览页面，复制 `地址栏url` 即可
- `tableComponent` 指定渲染的表格组件，目前支持 `yzt-grid` 和 `nz-table` 两种


### demo截图

运行结果：

<img src="https://raw.githubusercontent.com/giscafer/ngx-form-builder/master/src/app/document/images/demo2.png" width="1000px"/>


接口文档：

<img src="https://raw.githubusercontent.com/giscafer/ngx-form-builder/master/src/app/document/images/demo1.png" width="1000px"/>

### 欢迎反馈

提建议或参与贡献代码：https://github.com/giscafer/ngx-form-builder

### License

MIT by [@giscafer](https://github.com/giscafer)


