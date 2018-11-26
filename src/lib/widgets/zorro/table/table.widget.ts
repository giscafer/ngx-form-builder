import { ControlWidget } from '../../../widget';

export class TableWidget extends ControlWidget {

	constructor() {
		super();
	}

	getTemplate(schema) {
		return `
<nz-table [nzScroll]="{ x: '1800px', y: '400px' }"
	#rowSelectionTable
	[nzData]="data"
	(nzCurrentPageDataChange)="currentPageDataChange($event)"
	(nzPageIndexChange)="refreshStatus()"
	(nzPageSizeChange)="refreshStatus()">
	<thead>
		<tr>
			<th nzShowCheckbox [(nzChecked)]="allChecked" [nzIndeterminate]="indeterminate" (nzCheckedChange)="checkAll($event)"></th>
			<th *ngFor="let c of _columns">{{c.header}}</th>
		</tr>
	</thead>
	<tbody>
		<tr *ngFor="let data of rowSelectionTable.data">
			<td nzShowCheckbox [(nzChecked)]="data.checked" [nzDisabled]="data.disabled" (nzCheckedChange)="refreshStatus($event)"></td>
			<td  *ngFor="let c of _columns">{{data[c.field]}}</td>
		</tr>
	</tbody>
</nz-table>`;
	}
}


