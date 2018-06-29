import { ControlWidget } from "../../../widget";

export class CheckboxWidget extends ControlWidget {
    constructor() {
        super();
    }

    getTemplate(schema) {
        let templ = '<nz-form-item>';
        let listOfClassName = this.getLayoutClass(schema);

        if (schema.title) {
            templ += `
        <nz-form-label [nzSpan]="${schema.span_label}"  ${schema.require ? `nzRequired` : ''}>
            <span> ${schema.title || ''}
                ${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}
            </span>
        </nz-form-label>
      `;
        }

        templ += `
    <nz-form-control
        ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
        ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}>
        ${this.iterateOptions(schema)}
    </nz-form-control>
    </nz-form-item>`;

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