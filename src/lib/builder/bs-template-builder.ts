


export function BsTmplBuilder() {
    return `
    <fieldset *ngFor="let fieldset of formProperty.schema.fieldsets">
        <legend *ngIf="fieldset.title">{{fieldset.title}}</legend>
        <div *ngIf="fieldset.description">{{fieldset.description}}</div>
        <div *ngFor="let fieldId of fieldset.fields">
            {{fieldId}}
        </div>
    </fieldset>
    `;
}