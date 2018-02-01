import { ControlWidget } from "../../../widget";
import { generateClass } from "../../../utils/cls";

export class StringWidget extends ControlWidget {

    constructor() {
        super();
    }

    getTemplate(schema) {
        let listOfClassName = this.getLayoutClass(schema);
        let templ = "";
        if (this.getInputType(schema) === 'hidden') {
            templ = `<input  [attr.name]="name" type="hidden" [ngModel]="${schema.modelName}">`;
        } else {
            templ = `
            <div class="widget form-group ${listOfClassName.join(' ')}">
                <label for="${schema.formId}" class="horizontal control-label">
                    ${schema.title || ''}
                </label>
                ${schema.description ? `<span  class="formHelp"> ${schema.description}</span>` : ''}
                <input
                [(ngModel)]="${schema.modelName}.${schema.name}"
                id="${schema.formId}"
                name="${schema.name}"
                ${(schema.widget.id !== 'color' && schema.readOnly) ? `readonly="true"` : ""}
                class="text-widget.id textline-widget form-control"
                type="${this.getInputType(schema)}"
                placeholder="${schema.placeholder ? schema.placeholder : ' '}"
                ${(schema.maxLength || schema.maxLength == 0) ? `[attr.maxLength]="${schema.maxLength}"` : ""}
                ${(schema.minLength || schema.minLength == 0) ? `[attr.minLength]="${schema.minLength}"` : ""}
                ${(schema.widget.id === 'color' && schema.readOnly) ? `[attr.disabled]="'true'"` : ""}/>
                ${(schema.widget.id === 'color' && schema.readOnly) ? `<input name="${schema.name}" type="hidden">` : ""}
            </div>
            `;
        }

        return templ;
    }

    getInputType(widgetInfo) {
        if (!widgetInfo.widget.id || widgetInfo.widget.id === 'string') {
            return 'text';
        } else {
            return widgetInfo.widget.id;
        }
    }
}