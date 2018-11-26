import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { promiseHandler } from '../../utils/promiseHandler';
import { NzMessageService } from 'ng-zorro-antd';
import { of } from 'rxjs';

@Injectable()
export class YapiService {

    private loginUrl = 'https://yapi.1ziton.com/api/user/login';
    private TOKEN = '7f200d9bbc87e6e9440b';

    constructor(private http: HttpClient, private msg: NzMessageService) {

    }

    /* 登录yapi 获取session */
    login({ email, password }) {
        this.http.post(this.loginUrl, {
            email,
            password
        }).subscribe(json => {
            console.log(json);
        })
    }

    /* 获取接口信息 */
    getInterfaceInfo({ url }) {
        const arr = url.split('/');
        let interfaceId = arr[arr.length - 1];
        if (isNaN(Number(interfaceId))) {
            this.msg.error('请输入正确的yapi接口url地址')
            return;
        }
        url = `https://yapi.1ziton.com/api/interface/get?id=${interfaceId}`
        return new Promise((resolve, reject) => {
            this.http.get(url, { params: { token: this.TOKEN } }).subscribe(json => {
                console.log(json);
                return resolve(json);
            }, err => reject(err));
        })
    }

    /*根据接口生成json schema*/
    async genSchemaByInterface({ url }) {

        const [err, result] = await promiseHandler(this.getInterfaceInfo({ url }));

        if (err || !result) {
            this.msg.error(err);
            return null;
        }
        if (result.errcode !== 0) {
            this.msg.error(result.errmsg);
            return null;
        }
        const data = result.data;
        const { req_query, res_body } = data;
        const properties = this.queryParamsToProperties(req_query);
        const tableProperties = this.tableProperties(JSON.parse(res_body));


        return this.gridSchema(properties, tableProperties);
    }

    /* 根据req_query 参数生成查询表单 */
    private queryParamsToProperties(req_query) {
        let qryProperties = {};
        for (let item of req_query) {
            qryProperties[item.name] = {
                "type": "string",
                "title": item.desc,
                "default": item.example
            }
        }
        return qryProperties;
    }

    /* 根据req_body来生成表格 */
    private tableProperties(res_body) {
        let tableProperties = {};
        let content = [];
        // 兼容后端几种格式
        if (res_body.content && res_body.content.content && res_body.content.content.length) {
            content = res_body.content.content;
        } else if (res_body.content && res_body.content.length) {
            content = res_body.content;
        } else if (res_body.result && res_body.result.content && res_body.result.content.length) {
            content = res_body.result.content;
        } else if (res_body.result && res_body.result.length) {
            content = res_body.result;
        } else {
            content = [{}];
            this.msg.error('该接口不是列表接口！', { nzDuration: 4000 });
        }

        tableProperties['columns'] = Object.keys(content[0]);
        tableProperties['data'] = content;
        tableProperties['data'].push({
            "_id": "5aed10d9f770063f7cb66de0",
            "consignorCode": "admin",
            "name": "测试",
            "telephone": "13640512731",
            "type": "ordinary",
            "typeName": "普通",
            "isVip": false,
            "remarks": "",
            "createTime": "2018-05-05 10:03:05",
            "lastUpdateTime": "2018-05-05 10:03:05",
            "version": 1,
            "creator": "guest",
            "creatorName": "访客",
            "modifier": "guest",
            "modifierName": "访客"
        });
        return tableProperties;
    }

    private gridSchema(properties, tableProperties) {
        let baseSchema = {
            "debug": "true",
            "modelName": "qryParams",
            "fileName": "tableDemo",
            "grid": {
                "xs": {
                    "span": 24
                },
                "sm": {
                    "span": 24
                },
                "md": {
                    "span": 12
                },
                "lg": {
                    "span": 8
                },
                "xl": {
                    "span": 8
                },
                "xxl": {
                    "span": 8
                },
                "col_gutter": 10,
                "span_label": 8,
                "span_control": 15
            },
            "properties": {},
            "table": {},
            "button": {
                "grid": {
                    "md": {
                        "offset": 20,
                        "span": 4
                    }
                },
                "items": [
                    {
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
        };
        baseSchema['properties'] = properties;
        baseSchema['table'] = tableProperties;
        return baseSchema;
    }
}