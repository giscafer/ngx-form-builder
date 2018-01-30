import { ControlWidget } from "../../../widget";

export class SelectWidget extends ControlWidget {

	constructor() {
		super();
	}

	getTemplate(schema) {
		let listOfClassName = this.getLayoutClass(schema);
		return `
    	<div class="widget form-group ${listOfClassName.join(' ')}">
			<label for="${schema.formId}" class="horizontal control-label">
				${schema.title || ''}
			</label>
			${schema.description ? `<span class="formHelp">${schema.description}</span>` : ''}
			${schema.type === 'array' ? `
			<select multiple name="${schema.name}" ${schema.readOnly ? ` disabled="true"` : ""} class="form-control">
				${this.iterateOptions(schema.items.oneOf)}
			</select>
			` : `
			<select name="${schema.name}" ${schema.readOnly ? ` disabled="true"` : ""} class="form-control">
				${this.iterateOptions(schema.oneOf)}
			</select>
			`}
			${schema.readOnly ? `<input name="${schema.name}" type="hidden">` : ""}
		</div>
    `;
	}

	iterateOptions(items) {
		let htmlStr = '';
		for (let item of items) {
			htmlStr += `<option  value="${item.enum[0]}" >${item.description}</option>`
		}
		return htmlStr;
	}
}

