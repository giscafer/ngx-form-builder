import { ControlWidget } from "../../../widget";

export class DateWidget extends ControlWidget {

  constructor() {
    super();
  }

  getTemplate(schema) {
    let templ = '';
    let listOfClassName = this.getLayoutClass(schema);

    if (schema.title) {
      templ += `
        <nz-form-label  nz-col [nzSpan]="${schema.span_label}"  class="${listOfClassName.join(' ')}" for="${schema.formId}" nzRequired>
            <span> ${schema.title || ''}
                ${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}
            </span>
        </nz-form-label>
      `;
    }

    templ += `
    <nz-form-control nz-col
        ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
        ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}>
        <nz-date-picker
            [(ngModel)]="${schema.modelName}.${schema.name}"
            id="${schema.formId}"
            name="${schema.name}"
            ${schema.readOnly ? `[nzDisabled]="true"` : ""}
            ${schema.size ? `[nzSize]="'${schema.size}'"` : ''}
            ${schema.format ? `[nzFormat]="'${schema.format}'"` : `[nzFormat]="'YYYY/MM/DD'"`}
            ${schema.showTime ? `[nzShowTime]="true"` : `[nzShowTime]="false"`}
            [nzPlaceHolder]="'${schema.placeholder ? schema.placeholder : ''}'"></nz-date-picker>
    </nz-form-control>
    `;

    return templ;
  }

}

