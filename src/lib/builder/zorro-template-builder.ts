/*--------------------------------------------------------------
 *  Copyright (c) Nickbing Lao<giscafer@outlook.com>. All rights reserved.
 *  Licensed under the MIT License.
 *-------------------------------------------------------------*/


import { WidgetRegistry } from "../widget-registry";
export function ZorroTmplBuilder(registry: WidgetRegistry, formProperty: any) {

    let templ = "";
    let fieldsets = formProperty.schema.fieldsets;
    let layout = formProperty.schema.layout;
    let grid = formProperty.schema.grid || {};
    let style = formProperty.schema.style || '';
    let col_num = grid.col_num;
    let col_gutter = grid.col_gutter || 0;
    // let span = col_num ? 24 / col_num : 0;
    if (fieldsets && fieldsets.length) {
        templ = `<form nz-form ${layout ? `[nzLayout]="'${layout}'"` : ''} ${style ? `style="${style}"` : ''}>`;

        for (let fieldset of fieldsets) {
            templ += fieldset.title ? ('<legend style="margin-top:20px;">' + fieldset.title + '</legend>') : '';
            templ += `<div nz-row [nzGutter]="${col_gutter}">`
            for (let fieldId of fieldset.fields) {

                let property = formProperty.getProperty(fieldId);
                let widgetInfo = property.schema.widget;
                let WidgetClass = registry.getWidgetType(widgetInfo.id || widgetInfo);

                templ += `<div nz-col ${gridLayout(grid)}>`;

                if (widgetInfo.id === 'array') {
                    // TODO array widget not support yet
                    templ += new WidgetClass(formProperty, registry).getTemplate(property.schema);
                } else {
                    templ += new WidgetClass().getTemplate(property.schema);
                }
                templ += '</div>';
            }
            templ += '</div>';
        }

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
        <nz-form-item nz-row>
            <nz-form-control  [nzOffset]="7" [nzSpan]="12" class="${listOfClassName.join(' ')}">
                ${btnHtml}
            </nz-form-control>
        </nz-form-item>
        `;
    }
    templ += '</form>';
    templ += buildTable(formProperty, registry);

    return templ;
}


function gridLayout(grid) {
    let { sm = {}, xs = {}, md = {}, lg = {}, xl = {}, xxl = {} } = grid;

    let result = `${xs.span ? `nzXS="${xs.span}"` : ''} ${sm.span ? `nzSm="${sm.span}"` : ''} ${md.span ? `nzMd="${md.span}"` : ''} ${lg.span ? `nzLg="${lg.span}"` : ''} ${xl.span ? `nzXl="${xl.span}"` : ''} ${xxl.span ? `nzXXl="${xxl.span}"` : ''}`;
    return result;
}


function buildTable(formProperty, registry) {

    let schema = formProperty.schema;
    if (!schema.table) return '';
    let WidgetClass = registry.getWidgetType('table');
    let tableHtml = new WidgetClass().getTemplate()

    return tableHtml;

}