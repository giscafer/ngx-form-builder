

import { WidgetRegistry } from '../../widget-registry';
import { WidgetType } from '../../schema/index';

export class PrimengDefaultWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();
    this.setType(WidgetType.PRIMENG);

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
