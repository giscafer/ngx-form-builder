import { Component, OnInit } from '@angular/core';
import { FRMB_CONTROL_LIST } from './frmb-controls';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})
export class DndComponent implements OnInit {
  transferData: Object = {id: 1, label: 'Hello'};
  listCtrls=FRMB_CONTROL_LIST;
  targetList: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }


  addTo($event: any) {
    this.targetList.push($event.dragData);
}
}
