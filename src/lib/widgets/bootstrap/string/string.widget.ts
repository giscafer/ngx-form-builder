import { ControlWidget } from "../../../widget";

export class StringWidget extends ControlWidget {

    constructor() {
        super();
    }

    getTemplate(schema) {
        let templ = "";
        if (this.getInputType(schema) === 'hidden') {
            templ = `<input  [attr.name]="name" type="hidden" [formControl]="control" [ngModel]="${schema.modelName}">`;
        } else {
            templ = `
            <div class="widget form-group">
                <label [attr.for]="id" class="horizontal control-label">
                    ${schema.title}
                </label>
                ${schema.description ? `<span  class="formHelp"> ${schema.description}</span>` : ''}
                <input
                [(ngModel)]="${schema.modelName}.${schema.name}"
                [name]="'${schema.name}'"
                [attr.readonly]="('${schema.widget.id}'!=='color') ${schema.readOnly ? ' && true' : '&& null'}"
                class="text-widget.id textline-widget form-control"
                [attr.type]="${this.getInputType(schema)}"
                [attr.id]="id"  [formControl]="control"
                [attr.placeholder]="'${schema.placeholder ? schema.placeholder : ""}'"
                [attr.maxLength]="${schema.maxLength} || null"
                [attr.minLength]="${schema.minLength} || null"
                [attr.disabled]="${(schema.widget.id === 'color' && schema.readOnly) ? true : null}">
                <input *ngIf="${(schema.widget.id === 'color' && schema.readOnly) ? true : null}"
                [attr.name]="name" type="hidden" [formControl]="control">
            </div>
            `;
        }

        return templ;
    }

    getInputType(widgetInfo) {
        if (!widgetInfo.id || widgetInfo.id === 'string') {
            return 'text';
        } else {
            return widgetInfo.id;
        }
    }
}