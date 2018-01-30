import { PropertyGroup } from "../model";
import { WidgetRegistry } from "../widget-registry";

export function BsTmplBuilder(registry: WidgetRegistry, formProperty: any) {
    let templ = "";
    let fieldsets = formProperty.schema.fieldsets;
    if (fieldsets && fieldsets.length) {
        templ = '<fieldset>';
        for (let fieldset of fieldsets) {
            templ += fieldset.title ? ('<legend>' + fieldset.title + '</legend>') : '';
            for (let fieldId of fieldset.fields) {
                let property = formProperty.getProperty(fieldId);
                let widgetInfo = property.schema.widget;
                let WidgetClass = registry.getWidgetType(widgetInfo.id);
                // templ += '<div  *ngIf="property.visible" [class.has-error] = "!control.valid" [class.has-success] = "control.valid">';
                if (widgetInfo.id === 'array') {
                    // TODO array widget not support yet
                    templ += new WidgetClass(formProperty, registry).getTemplate(property.schema);
                } else {
                    templ += new WidgetClass().getTemplate(property.schema);
                }
                // templ += '</div>';
            }
        }
    }
    if (formProperty.schema.buttons !== undefined) {
        let buttons = formProperty.schema.buttons;
        let WidgetClass = registry.getWidgetType('button');
        let btnHtml = '', btnWidget = null, btnGrid = {};
        for (let btn of buttons) {
            btnWidget = new WidgetClass();
            Object.assign(btnGrid, btn.grid ? btn.grid : {});
            btnHtml += btnWidget.getTemplate(formProperty.schema, btn);
        }
        let listOfClassName = btnWidget.getLayoutClass({ grid: btnGrid });
        templ += `
        <div class="form-group">
            <div class="${listOfClassName.join(' ')}">
                ${btnHtml}
            </div>
        </div>
        `;
    }
    templ += '</fieldset>';
    return templ;
}
