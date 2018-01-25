import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import {WidgetChooserComponent} from './widget-chooser.component';

import {WidgetRegistry} from './widget-registry';
import { PrimengDefaultWidgetRegistry } from './primengwidgets';

const moduleProviders = [
  {
    provide: WidgetRegistry,
    useClass: PrimengDefaultWidgetRegistry
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    WidgetChooserComponent
  ],
  entryComponents: [
    WidgetChooserComponent
  ],
  exports: [
    WidgetChooserComponent
  ]
})
export class SchemaFormModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SchemaFormModule,
      providers: [...moduleProviders]
    };
  }

}
