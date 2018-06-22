import { ControlWidget } from "../../../widget";
import { generateClass } from "../../../utils/cls";

export class TextAreaWidget extends ControlWidget {

    constructor() {
        super();
    }

    getTemplate(schema) {
        let listOfClassName = this.getLayoutClass(schema);
        let templ = `
        <nz-form-label  nz-col [nzSpan]="${schema.span_label}"  class="${listOfClassName.join(' ')}" for="${schema.formId}" nzRequired>
            <span> ${schema.title || ''}
                ${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}
            </span>
        </nz-form-label>
        <nz-form-control  nz-col
            ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
            ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}>
            <textarea  nz-input
            [(ngModel)]="${schema.modelName}.${schema.name}"
            id="${schema.formId}"
            name="${schema.name}"
            nzType="textarea" rows="2" 
            placeholder="${schema.placeholder ? schema.placeholder : ' '}"
            ${schema.readOnly ? `[readonly]="true"` : ""}
            ${(schema.autosize) ? `[nzAutosize]="${schema.autosize}"` : ""}></textarea>
        </nz-form-control>
        `;

        return templ;
    }
}