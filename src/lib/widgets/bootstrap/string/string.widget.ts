import { ControlWidget } from "../../../widget";

export class StringWidget extends ControlWidget {

    constructor() {
        super();
    }

    getTemplate(schema) {
        let templ = "";
        if (this.getInputType(schema) === 'hidden') {
            templ = `<input  [attr.name]="name" type="hidden" [ngModel]="${schema.modelName}">`;
        } else {
            templ = `
            <div class="widget form-group">
                <label for="${schema.formId}" class="horizontal control-label">
                    ${schema.title}
                </label>
                ${schema.description ? `<span  class="formHelp"> ${schema.description}</span>` : ''}
                <input
                [(ngModel)]="${schema.modelName}.${schema.name}"
                id="${schema.formId}"
                name="${schema.name}"
                [attr.readonly]="('${schema.widget.id}'!=='color') ${schema.readOnly ? ' && true' : '&& null'}"
                class="text-widget.id textline-widget form-control"
                type="${this.getInputType(schema)}"
                [attr.placeholder]="'${schema.placeholder ? schema.placeholder : ""}'"
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