import { ControlWidget } from "../../../widget";

export class RadioWidget extends ControlWidget {
    constructor() {
        super();
    }

    getTemplate(schema) {
        let templ = '<nz-form-item>';
        // let listOfClassName = this.getLayoutClass(schema);

        if (schema.title) {
            templ += `<nz-form-label [nzSpan]="${schema.span_label}" for="${schema.formId}">
                <span> ${schema.title || ''}
                    ${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}
                </span>
            </nz-form-label>`;
        }

        templ += `
        <nz-form-control
            ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
            ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}>
            ${this.iterateOptions(schema)}
        </nz-form-control>
    </nz-form-item>
    `;

        return templ;
    }

    // ${this.iterateOptions(schema)}
    iterateOptions(schema) {
        let htmlStr = '', options = schema.oneOf || [];
        if (!options.length) {
            htmlStr = `
            <label nz-radio
                [(ngModel)]="${schema.modelName}.${schema.name}"
                id="${schema.formId}"
                name="${schema.name}"
                ${schema.readOnly ? `[nzDisabled]="true"` : ""}>
                <span>${schema.description}</span>
            </label>
			`
        } else {
            htmlStr = `<nz-radio-group  name="${schema.name}" [(ngModel)]="${schema.modelName}.${schema.name}">`;
            for (let option of options) {
                htmlStr += `
                <label nz-radio [nzValue]="'${option.enum[0]}'">
                    <span>${option.description}</span>
                </label>
				`;
            }
            htmlStr += `</nz-radio-group>`;

        }
        return htmlStr;
    }
}