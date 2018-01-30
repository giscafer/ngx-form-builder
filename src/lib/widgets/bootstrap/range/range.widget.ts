
import { ControlWidget } from "../../../widget";

export class RangeWidget extends ControlWidget {

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
			<input 
			  [(ngModel)]="${schema.modelName}.${schema.name}"
				id="${schema.formId}"
				name="${schema.name}"
				class="text-widget range-widget"
				type="range"
				[attr.min]="${schema.minimum}"
				[attr.max]="${schema.maximum}"
				${(schema.readOnly) ? ` disabled="true"` : ""}
			>
			${schema.readOnly ? `<input name="${schema.name}" type="hidden">` : ""}
		</div>
    `;
	}

}

