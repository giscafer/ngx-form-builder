import { PropertyGroup } from "../model";
import { WidgetRegistry } from "../widget-registry";




export function BsTmplBuilder(registry: WidgetRegistry, formProperty: any) {
    let templ = "";
    let fieldsets = formProperty.schema.fieldsets;
    if (fieldsets && fieldsets.length) {
        templ = '<fieldset>';
        for (let fieldset of fieldsets) {
            templ += fieldset.title ? ('<legend>' + fieldset.title + '</legend>') : '';
            for (let fieldId of fieldset.fields) {
                let property = formProperty.getProperty(fieldId);
                let widgetInfo = property.schema.widget;
                let widgetString = registry.getWidgetType(widgetInfo.id);
                templ += '<div  *ngIf="property.visible" [class.has-error] = "!control.valid" [class.has-success] = "control.valid">';
                templ += getStringWidget(property.schema);
                templ += '</div>';
            }
        }
    }

    return templ;

    /*  `
     <fieldset *ngFor="">
         <legend *ngIf="fieldset.title">{{fieldset.title}}</legend>
         <div *ngIf="fieldset.description">{{fieldset.description}}</div>
         <div *ngFor="let fieldId of fieldset.fields">
             {{fieldId}}1{{fields}}
             <div *ngIf="formProperty.getProperty(fieldId).visible"
                 [class.has-error]="!control.valid"
                 [class.has-success]="control.valid">
 
             </div>
         </div>
     </fieldset>
     ` */
}



function getStringWidget(schema) {
    let stringWidgetTempl = "";
    if (getInputType(schema) === 'hidden') {
        stringWidgetTempl = `<input  [attr.name]="name" type="hidden" [formControl]="control" [ngModel]="${schema.modelName}">`;
    } else {
        stringWidgetTempl = `
        <div class="widget form-group">
            <label [attr.for]="id" class="horizontal control-label">
                ${schema.title}
            </label>
            ${schema.description ? `<span  class="formHelp"> ${schema.description}</span>` : ''}
            <input  [(ngModel)]="${schema.modelName}.${schema.name}" [name]="'${schema.name}'" [attr.readonly]="(${schema.widget.id}!=='color') && ${schema.readOnly}?true:null"
            class="text-widget.id textline-widget form-control" [attr.type]="${getInputType(schema)}"
            [attr.id]="id"  [formControl]="control" [attr.placeholder]="'${schema.placeholder ? schema.placeholder : ""}'"
            [attr.maxLength]="${schema.maxLength} || null"
            [attr.minLength]="${schema.minLength} || null"
            [attr.disabled]="(${schema.widget.id}=='color' && ${schema.readOnly})?true:null">
            <input *ngIf="(${schema.widget.id}==='color' && ${schema.readOnly})" [attr.name]="name" type="hidden" [formControl]="control">
        </div>
        `;
    }

    return stringWidgetTempl;
}

function getInputType(schema) {
    if (!schema.widget.id || schema.widget.id === 'string') {
        return 'text';
    } else {
        return schema.widget.id;
    }
}