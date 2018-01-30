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
                templ += new WidgetClass().getTemplate(property.schema);
                // templ += '</div>';
            }
        }
    }
    if (formProperty.schema.buttons !== undefined) {
        let buttons = formProperty.schema.buttons;
        for (let btn of buttons) {
            let WidgetClass = registry.getWidgetType('button');
            templ += new WidgetClass().getTemplate(formProperty.schema,btn);
        }
    }
    templ += '</fieldset>';
    return templ;
}
