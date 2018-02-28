import { ControlWidget } from "../../../widget";

export class TimeWidget extends ControlWidget {

  constructor() {
    super();
  }

  getTemplate(schema) {
    let templ = '';
    let listOfClassName = this.getLayoutClass(schema);

    if (schema.title) {
      templ += `
        <div nz-form-label nz-col [nzSpan]="${schema.span_label}"  class="${listOfClassName.join(' ')}">
            <label for="${schema.formId}" nz-form-item-required [nzRequired]="required">
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
        <nz-timepicker
            [(ngModel)]="${schema.modelName}.${schema.name}"
            id="${schema.formId}"
            name="${schema.name}"
            ${schema.readOnly ? `[nzDisabled]="true"` : ""}
            ${schema.size ? `[nzSize]="'${schema.size}'"` : ''}
            ${schema.format ? `[nzFormat]="'${schema.format}'"` : `[nzFormat]="'HH:mm:ss'"`}
            [nzPlaceHolder]="'${schema.placeholder ? schema.placeholder : ''}'"></nz-timepicker>
    </div>
    `;

    return templ;
  }

}

