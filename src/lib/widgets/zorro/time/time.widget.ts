import { ControlWidget } from "../../../widget";

export class TimeWidget extends ControlWidget {

  constructor() {
    super();
  }

  getTemplate(schema) {
    let templ = '<nz-form-item>';
    let listOfClassName = this.getLayoutClass(schema);

    if (schema.title) {
      templ += `
        <div nz-form-label [nzSpan]="${schema.span_label}"  ${schema.require ? `nzRequired` : ''} for="${schema.formId}" ${schema.require ? `nzRequired` : ''}>
            <span> ${schema.title || ''} ${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}</span>
        </div>
      `;
    }

    templ += `
    <nz-form-control
        ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
        ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}>
        <nz-time-picker
            [(ngModel)]="${schema.modelName}.${schema.name}"
            id="${schema.formId}"
            name="${schema.name}"
            ${schema.readOnly ? `[nzDisabled]="true"` : ""}
            ${schema.size ? `[nzSize]="'${schema.size}'"` : ''}
            ${schema.format ? `[nzFormat]="'${schema.format}'"` : `[nzFormat]="'HH:mm:ss'"`}
            [nzPlaceHolder]="'${schema.placeholder ? schema.placeholder : ''}'"></nz-time-picker>
    </nz-form-control>
  </nz-form-item>
    `;

    return templ;
  }

}

