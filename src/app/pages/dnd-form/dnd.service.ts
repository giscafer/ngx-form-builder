import { Injectable } from '@angular/core';

@Injectable()
export class DndService {

    defaultProperty = {
        "type": "string",
        "widget": "string",
        "title": "字段名称",
        "placeholder": "请输入"
    }

    _count = -1;
    get count(): number {
        return ++this._count;
    }

    constructor() { }

    generateSchema(properties) {

        return `{
            "debug": "true",
            "layout": "horizontal",
            "grid": {
                "span_label": 5,
                "span_control": 16
            },
            "properties": ${JSON.stringify(properties)}
        }`;
    }

    genSchemaByControl(ctrl): string {
        const { widget } = ctrl;
        const fieldName = `field_` + this.count;

        const properties = {
            ...this.defaultProperty, ...{
                widget,
                title: fieldName
            }
        };
        return this.generateSchema({
            [fieldName]: properties
        });
    }
}