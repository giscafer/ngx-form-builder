/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/


import { PropertyGroup } from "../model";
import { WidgetRegistry } from "../widget-registry";
import { WidgetType } from "../schema/widget-type";
export function ZorroTmplBuilder(registry: WidgetRegistry, formProperty: any) {

    let templ = "";
    let fieldsets = formProperty.schema.fieldsets;
    let layout = formProperty.schema.layout;
    let col_num = formProperty.schema.col_num;
    let col_gutter = formProperty.schema.col_gutter || 0;
    let span = col_num ? 24 / col_num : 0;
    if (fieldsets && fieldsets.length) {
        templ = `<form nz-form ${layout ? `[nzLayout]="'${layout}'"` : ''}><div nz-row [nzGutter]="${col_gutter}">`;

        for (let fieldset of fieldsets) {
            templ += fieldset.title ? ('<legend>' + fieldset.title + '</legend>') : '';

            for (let fieldId of fieldset.fields) {

                let property = formProperty.getProperty(fieldId);
                let widgetInfo = property.schema.widget;
                let WidgetClass = registry.getWidgetType(widgetInfo.id || widgetInfo);

                templ += col_num ? `<div nz-col [nzSpan]="${span}" nz-form-item>` : '<div  nz-row nz-form-item>';

                if (widgetInfo.id === 'array') {
                    // TODO array widget not support yet
                    templ += new WidgetClass(formProperty, registry).getTemplate(property.schema);
                } else {
                    templ += new WidgetClass().getTemplate(property.schema);
                }
                templ += '</div>';
            }
        }
        templ += '</div>';
    }
    if (formProperty.schema.button !== undefined) {
        let button = formProperty.schema.button;
        let WidgetClass = registry.getWidgetType('button');
        let btnHtml = '', btnWidget = null, btnGrid = button.grid || {};
        for (let btn of button.items) {
            btnWidget = new WidgetClass();
            btnHtml += btnWidget.getTemplate(formProperty.schema, btn);
        }
        let listOfClassName = btnWidget.getLayoutClass({ grid: btnGrid, _prefixCls: 'ant-col' });
        templ += `
        <div  nz-form-item nz-row>
            <div  nz-col class="${listOfClassName.join(' ')}">
                ${btnHtml}
            </div>
        </div>
        `;
    }
    templ += '</form>';
    return templ;
}
