import { ControlWidget } from "../../../widget";

export class CheckboxWidget extends ControlWidget {
    constructor() {
        super();
    }

    getTemplate(schema) {
        let templ = '';
        let listOfClassName = this.getLayoutClass(schema);

        if (schema.title) {
            templ += `
        <div nz-form-label nz-col [nzSpan]="${schema.span_label}"  class="${listOfClassName.join(' ')}">
            <label for="${schema.formId}" nzRequired>
                <span> ${schema.title || ''}
                    ${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}
                </span>
            </label>
        </div>
      `;
        }

        templ += `
    <div nz-form-control nz-col
        ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
        ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}>
        ${this.iterateOptions(schema)}
    </div>
    `;

        return templ;
    }

    // ${this.iterateOptions(schema)}
    iterateOptions(schema) {
        let htmlStr = '', options = schema.items && schema.items.oneOf;
        if (schema.type != 'array') {
            htmlStr = `
            <label nz-checkbox
                [(ngModel)]="${schema.modelName}.${schema.name}"
                id="${schema.formId}"
                name="${schema.name}"
                ${schema.readOnly ? `[nzDisabled]="true"` : ""}>
                <span>${schema.description}</span>
            </label>
			`
        } else if (schema.type === 'array') {
            htmlStr = `<nz-checkbox-group  name="${schema.name}" [(ngModel)]="${schema.modelName}.checkOptions"></nz-checkbox-group> 
            {{${schema.modelName}.checkOptions | json}}
            `;
        }
        return htmlStr;
    }
}