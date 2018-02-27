import { ControlWidget } from "../../../widget";

export class ButtonWidget extends ControlWidget {
  public button
  public formProperty
  constructor() {
    super();
  }

  getTemplate(schema, button) {
    return `
    <button nz-button (click)="action($event,'${button.id}')" class="btn btn-default">${button.label}</button>
    `;
  }

}

