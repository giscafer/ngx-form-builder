import { Component, OnInit } from '@angular/core';
import { FRMB_CONTROL_LIST, Grid, ColNumList, text } from './frmb-controls';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DndService } from './dnd.service';

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

  // from
  formBuilderValue: Object;
  schemaJson: Object;
  htmlCode = '';
  componentCode = '';
  schemaString = '';


  constructor(private dndSrv: DndService) { }

  ngOnInit() {
    this.resetColumns();
    this.run(text);
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

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    const schemaObj = this.dndSrv.genSchemaByControl(event.container.data[event.currentIndex]);
    console.log(schemaObj)
    this.schemaJson = JSON.parse(schemaObj);
  }



  /* form builder */
  logErrors(errors) {
    console.log('ERRORS', errors);
  }



  onBuilderFinish($event) {
    this.htmlCode = $event.htmlCode;
    this.componentCode = $event.componentCode;
  }

  run(text: string) {
    this.schemaJson = JSON.parse(text);
  }

  onAceChange(data) {
    console.log('~~~编辑器内容变化~~~');
  }

  setValue(value) {
    this.formBuilderValue = value;
  }

}
