/**
 * @author: giscafer ,https://github.com/giscafer
 * @date: 2018-07-02 15:15:03
 * @description: 
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HighlightResult } from 'ngx-highlightjs';

@Component({
  selector: 'code-slider',
  templateUrl: './code-slider.component.html',
  styleUrls: ['./code-slider.component.scss']
})
export class CodeSliderComponent implements OnInit {

  hide: boolean = false;
  _show = false;

  @Output()
  showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  set show(v: boolean) {
    this._show = v;
  }
  get show(): boolean {
    return this._show;
  }

  @Input()
  htmlCode = ` `;
  @Input()
  jsCode = ` `;

  constructor() { }

  ngOnInit() {
    console.log(this.htmlCode)
  }

  collapse() {
    this.hide = true;
    setTimeout(() => {
      this.show = false;
      this.showChange.emit(this.show);
    }, 1000);
  }


  response: HighlightResult;

  onHighlight(e) {
    this.response = {
      language: e.language,
      r: e.r,
      second_best: '{...}',
      top: '{...}',
      value: '{...}'
    }
  }
}
