import { ControlWidget } from "../../../widget";

export class CheckboxWidget extends ControlWidget {

	constructor() {
		super();
	}

	getTemplate(schema) {
		return `
		<div class="widget form-group">
				<label for="${schema.formId}" class="horizontal control-label">
					${schema.title || ''}
				</label>
				${this.iterateOptions(schema)}
			</div>
		`;
	}

	iterateOptions(schema) {
		let htmlStr = '', options = schema.items && schema.items.oneOf;
		if (schema.type != 'array') {
			htmlStr = `
			<label class="horizontal control-label">
				<input name="${schema.name}" [indeterminate]="control.value !== false && control.value !== true ? true :null" type="checkbox" ${schema.readOnly ? ` disabled="true"` : ""}>
				${schema.readOnly ? `<input name="${schema.name}" type="hidden">` : ""}
				${schema.description}
			</label>
			`
		} else if (schema.type === 'array') {
			for (let option of options) {
				htmlStr += `
				<div  class="checkbox">
					<label class="horizontal control-label">
						<input  type="checkbox" name="${schema.name}"
							value="${option.enum[0]}"
							${schema.readOnly ? ` disabled="true"` : ""}>
							${option.description}
					</label>
				</div>
				`;
			}
		}
		return htmlStr;
	}
}


