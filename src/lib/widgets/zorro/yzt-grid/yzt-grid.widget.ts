import { ControlWidget } from '../../../widget';

export class YztGridWidget extends ControlWidget {

	constructor() {
		super();
	}

	getTemplate(schema) {
		return `
	<yzt-grid
		[scroll]="{ x: '2300px', y: '800px' }"
		#grid_basic
		[data]="data"
		[columns]="_columns"
		[(selection)]="selection"
		[hideCheck]="true"
		(load)="load($event)">
	</yzt-grid>`;
	}
}


