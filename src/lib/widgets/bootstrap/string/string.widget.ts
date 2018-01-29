import { ControlWidget } from "angular2-schema-form";

export class StringWidget extends ControlWidget {

    constructor() {
        super();
    }

    getTemplate() {
        return `<div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
          </div>`;
    }

    getInputType(widgetInfo) {
        if (!widgetInfo.id || widgetInfo.id === 'string') {
            return 'text';
        } else {
            return widgetInfo.id;
        }
    }
}