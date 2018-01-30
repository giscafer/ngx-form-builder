

import { ControlWidget } from "../../../widget";

export class TextAreaWidget extends ControlWidget {

	constructor() {
		super();
	}

	getTemplate(schema) {
		return `
    <div class="widget form-group">
			<label for="${schema.formId}" class="horizontal control-label">
				${schema.title || ''}
			</label>
			${schema.description ? `<span class="formHelp">${schema.description}</span>` : ''}
			<textarea 
				class="text-widget textarea-widget form-control"
			  [(ngModel)]="${schema.modelName}.${schema.name}"
				id="${schema.formId}"
				name="${schema.name}"
				type="range"
				placeholder="${schema.placeholder ? schema.placeholder : ' '}"
				${(schema.maxLength || schema.maxLength == 0) ? `[attr.maxLength]="${schema.maxLength}"` : ""}
				${(schema.minLength || schema.minLength == 0) ? `[attr.minLength]="${schema.minLength}"` : ""}
				${schema.readOnly ? ` disabled="true"` : ""}
			></textarea>
		</div>
    `;
	}

}

