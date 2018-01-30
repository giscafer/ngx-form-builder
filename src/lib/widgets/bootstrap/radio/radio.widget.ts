import { ControlWidget } from "../../../widget";

export class RadioWidget extends ControlWidget {

	constructor() {
		super();
	}

	getTemplate(schema) {
		return `
    	<div class="widget form-group">
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
			<div class="radio">
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

