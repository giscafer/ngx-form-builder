import { ControlWidget } from "../../../widget";

export class RadioWidget extends ControlWidget {

	constructor() {
		super();
	}

	getTemplate(schema) {
		let listOfClassName = this.getLayoutClass(schema);
		return `
    	<div class="widget form-group ${listOfClassName.join(' ')}">
			<label class="horizontal control-label">
				${schema.title || ''}
			</label>
			${schema.description ? `<span class="formHelp">${schema.description}</span>` : ''}
			${this.iterateOptions(schema)}
		</div>
    `;
	}

	iterateOptions(schema) {
		let htmlStr = '', options = schema.oneOf;
		for (let option of options) {
			htmlStr += `
			<div class="radio${schema.grid && schema.grid.mode ? ('-' + schema.grid.mode) : ''}">
				<label class="horizontal control-label">
					<input name="${schema.name}"
					type="radio" value="${option.enum[0]}" ${schema.readOnly ? ` disabled="true"` : ""}>
					${option.description}
				</label>
			</div>
			`;
		}
		return htmlStr;
	}
}

