import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { BsFormBuilderComponent } from './components/bs-form-builder.component';

import { WidgetRegistry } from './widget-registry';
// import { PrimengDefaultWidgetRegistry } from './widgets/primeng';
import { BootStrapDefaultWidgetRegistry } from './widgets/bootstrap';
import { SchemaValidatorFactory, ZSchemaValidatorFactory } from 'angular2-schema-form';

const moduleProviders = [
 /*  {
    provide: WidgetRegistry,
    useClass: PrimengDefaultWidgetRegistry
  }, */{
    provide: WidgetRegistry,
    useClass: BootStrapDefaultWidgetRegistry
  }, {
    provide: SchemaValidatorFactory,
    useClass: ZSchemaValidatorFactory
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    BsFormBuilderComponent
  ],
  entryComponents: [
    BsFormBuilderComponent
  ],
  exports: [
    BsFormBuilderComponent
  ],
  providers: [...moduleProviders]
})
export class SchemaFormModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SchemaFormModule,
      providers: [...moduleProviders]
    };
  }

}
