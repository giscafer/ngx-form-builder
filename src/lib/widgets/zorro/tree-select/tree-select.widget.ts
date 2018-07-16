import { ControlWidget } from "../../../widget";

export class TreeSelectWidget extends ControlWidget {

    constructor() {
        super();
    }

    getTemplate(schema) {
        let listOfClassName = this.getLayoutClass(schema);
        let templ = `
        <nz-form-item>
            <nz-form-label for="${schema.formId}" [nzSpan]="${schema.span_label}" ${schema.require ? `nzRequired` : ''}>
                <span> ${schema.title || ''} ${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}</span>
            </nz-form-label>
            <nz-form-control 
                ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
                ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}>
                <nz-tree-select nzShowSearch nzAllowClear
                [nzNodes]="[]"
                [(ngModel)]="${schema.modelName}.${schema.name}"
                id="${schema.formId}"
                name="${schema.name}"
                ${schema.readOnly ? `[nzDisabled]="true"` : ""}
                nzPlaceHolder="${schema.placeholder ? schema.placeholder : ' '}">
                </nz-tree-select>
            </nz-form-control>
        </nz-form-item>
        `;
        return templ;
    }


    iterateOptions(schema) {
        let htmlStr = '', options = (schema.items && schema.items.oneOf) || schema.oneOf;
        for (let option of options) {
            htmlStr += `<nz-option nzValue="${option.enum[0]}" nzLabel="${option.description}"></nz-option>
            `;
        }
        return htmlStr;
    }
}