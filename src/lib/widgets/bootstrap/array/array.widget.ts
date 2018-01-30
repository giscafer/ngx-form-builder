import { ArrayLayoutWidget } from '../../../widget';
import { WidgetRegistry } from '../../../widget-registry';

export class ArrayWidget extends ArrayLayoutWidget {

	constructor(private _formProperty: any, private registry?: WidgetRegistry) {
		super();
		this.formProperty = _formProperty;
	}

	getTemplate(schema) {
		return `
		<div class="widget form-group">
				<label for="${schema.formId}" class="horizontal control-label">
					${schema.title || ''}
				</label>
				${schema.description ? `<span class="formHelp">${schema.description}</span>` : ''}
				${this.iterateOptions(schema)}
				
				<button (click)="addItem()" class="btn btn-default array-add-button">
					<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> Add
				</button>
			</div>
		`;
	}

	iterateOptions(schema) {
		let htmlStr = '', properties = this.formProperty.properties;
		for (let itemProperty of <Array<any>>properties) {
			let widgetInfo = itemProperty.schema.widget;
			let WidgetClass = this.registry.getWidgetType(widgetInfo.id);
			htmlStr += `
			<div>
				${ new WidgetClass().getTemplate(itemProperty.schema)}
				<button (click)="removeItem(i)" class="btn btn-default array-remove-button">
					<span class="glyphicon glyphicon-minus" aria-hidden="true"></span> Remove
				</button>
			</div>
			`;
		}
		return htmlStr;
	}

}


