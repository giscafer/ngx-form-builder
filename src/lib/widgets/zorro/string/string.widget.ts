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
            templ = `<input  nz-input [attr.name]="name" type="hidden" [ngModel]="${schema.modelName}">`;
        } else {
            templ = `
            <div nz-form-label nz-col [nzSpan]="${schema.span_label}"  class="${listOfClassName.join(' ')}">
                <label for="${schema.formId}" nz-form-item-required [nzRequired]="required">
                    <span> ${schema.title || ''}
                        ${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}
                    </span>
                </label>
            </div>
            <div nz-form-control nz-col
                ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
                ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}
             nzHasFeedback>
                <input nz-input
                [(ngModel)]="${schema.modelName}.${schema.name}"
                id="${schema.formId}"
                name="${schema.name}"
                ${(schema.widget.id !== 'color' && schema.readOnly) ? `[nzReadonly]="true"` : ""}
                type="${this.getInputType(schema)}"
                placeholder="${schema.placeholder ? schema.placeholder : ' '}"
                ${(schema.maxLength || schema.maxLength == 0) ? `[attr.maxLength]="${schema.maxLength}"` : ""}
                ${(schema.minLength || schema.minLength == 0) ? `[attr.minLength]="${schema.minLength}"` : ""}
                ${(schema.widget.id === 'color' && schema.readOnly) ? `[attr.disabled]="'true'"` : ""}/>
                ${(schema.widget.id === 'color' && schema.readOnly) ? `<input  nz-input name="${schema.name}" type="hidden"/>` : ""}
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