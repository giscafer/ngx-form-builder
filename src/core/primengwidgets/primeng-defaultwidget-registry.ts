

import { WidgetRegistry } from '../widget-registry';

export class PrimengDefaultWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();

    this.register('string', () => {
      return `<div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>`;
    });
   
    this.setDefaultWidget(() => {
      return `<div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>`;
    });
  }
}
