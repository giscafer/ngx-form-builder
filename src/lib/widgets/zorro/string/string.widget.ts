import { ControlWidget } from "../../../widget";

export class StringWidget extends ControlWidget {

    constructor() {
        super();
    }

    getTemplate(schema) {
        let listOfClassName = this.getLayoutClass(schema);
        let templ = "";
        if (this.getInputType(schema) === 'hidden') {
            templ = `<input  nz-input [attr.name]="name" type="hidden" [ngModel]="${schema.modelName}">`;
        } else {
            templ = `
            <nz-form-item>
                <nz-form-label for="${schema.formId}" [nzSpan]="${schema.span_label}" ${schema.require ? `nzRequired` : ''}>
                    <span> ${schema.title || ''}${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}</span>
                </nz-form-label>
                <nz-form-control 
                    ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
                    ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}>
                    <input nz-input
                    [(ngModel)]="${schema.modelName}.${schema.name}"
                    id="${schema.formId}"
                    name="${schema.name}"
                    ${(schema.widget.id !== 'color' && schema.readOnly) ? `[readonly]="true"` : ""}
                    type="${this.getInputType(schema)}"
                    placeholder="${schema.placeholder ? schema.placeholder : ' '}"
                    ${(schema.maxLength || schema.maxLength == 0) ? `[attr.maxLength]="${schema.maxLength}"` : ""}
                    ${(schema.minLength || schema.minLength == 0) ? `[attr.minLength]="${schema.minLength}"` : ""}
                    ${(schema.widget.id === 'color' && schema.readOnly) ? `[attr.disabled]="'true'"` : ""}/>
                    ${(schema.widget.id === 'color' && schema.readOnly) ? `<input  nz-input name="${schema.name}" type="hidden"/>` : ""}
                </nz-form-control>
            </nz-form-item>
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