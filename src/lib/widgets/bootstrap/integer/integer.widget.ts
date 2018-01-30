import { ControlWidget } from "../../../widget";

export class IntegerWidget extends ControlWidget {

	constructor() {
		super();
	}

	getTemplate(schema) {
		return `
    <div class="widget form-group">
			<label for="${schema.formId}" class="horizontal control-label">
				${schema.title}
			</label>
			<div class="widget form-group">
			${schema.description ? `<span class="formHelp">${schema.description}</span>` : ''}
			<input 
			  [(ngModel)]="${schema.modelName}.${schema.name}"
				id="${schema.formId}"
				name="${schema.name}"
				class="text-widget integer-widget form-control"
				type="number"
				[attr.min]="${schema.minimum}"
				[attr.max]="${schema.maximum}"
				placeholder="${schema.placeholder ? schema.placeholder : ''}"
				${(schema.readOnly) ? ` readonly="true"` : ""}
				${(schema.maxLength || schema.maxLength == 0) ? `[attr.maxLength]="${schema.maxLength}"` : ""}
				${(schema.minLength || schema.minLength == 0) ? `[attr.minLength]="${schema.minLength}"` : ""}
			>
			</div>
		</div>
    `;
	}

}

