import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SchemaFormModule } from '../lib';
// import { SchemaFormModule, SchemaValidatorFactory, ZSchemaValidatorFactory } from 'angular2-schema-form';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    SchemaFormModule,
    HttpModule
  ],
 /*  providers: [
    {
      provide: SchemaValidatorFactory,
      useClass: ZSchemaValidatorFactory
    }
  ], */
  bootstrap: [AppComponent]
})
export class AppModule { }
