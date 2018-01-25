

export const objectTpl = `<fieldset *ngFor="let fieldset of formProperty.schema.fieldsets">
<legend *ngIf="fieldset.title">{{fieldset.title}}</legend>
<div *ngIf="fieldset.description">{{fieldset.description}}</div>
<div *ngFor="let fieldId of fieldset.fields">
    <sf-form-element [formProperty]="formProperty.getProperty(fieldId)"></sf-form-element>
</div>
</fieldset>`;