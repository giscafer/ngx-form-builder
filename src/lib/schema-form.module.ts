import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import { WidgetRegistry } from './widget-registry';


import { BsFormBuilderComponent } from './components/bs-form-builder.component';
import { ZorroFormBuilderComponent } from './components/zorro-form-builder.component';

// import { PrimengDefaultWidgetRegistry } from './widgets/primeng';
import { BootStrapDefaultWidgetRegistry } from './widgets/bootstrap';
import { SchemaValidatorFactory, ZSchemaValidatorFactory } from './schemavalidator.factory';
import { ZorroDefaultWidgetRegistry } from './index';

const moduleProviders = [
  {
    provide: SchemaValidatorFactory,
    useClass: ZSchemaValidatorFactory
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    BsFormBuilderComponent,
    ZorroFormBuilderComponent
  ],
  entryComponents: [
    BsFormBuilderComponent,
    ZorroFormBuilderComponent
  ],
  exports: [
    BsFormBuilderComponent,
    ZorroFormBuilderComponent
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
