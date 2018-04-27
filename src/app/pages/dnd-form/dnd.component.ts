import { Component, OnInit } from '@angular/core';
import { FRMB_CONTROL_LIST, Grid, ColNumList } from './frmb-controls';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})
export class DndComponent implements OnInit {

  grid: Grid = {
    colNum: 1,
    colGutter: 10
  };

  colNumList = ColNumList;


  dropPanels = [];

  transferData: Object = { id: 1, label: 'Hello' };

  listCtrls = FRMB_CONTROL_LIST;
  targetList: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.resetColumns();
  }


  resetColumns() {
    let count = this.grid.colNum;
    let arr = []
    while (--count >= 0) {
      arr.push({
        targetList: []
      });
    }
    this.dropPanels = arr;
  }

  addTo($event: any) {
    // this.targetList.push($event.dragData);
    console.log($event)
  }

  colNumChanged($event) {
    console.log($event);
    this.resetColumns();
  }
}
