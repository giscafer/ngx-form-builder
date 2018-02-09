import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SchemaFormModule } from '../lib';

// third part libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AceEditorModule } from 'ng-ace-tern';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    AceEditorModule,
    SchemaFormModule,
    NgZorroAntdModule.forRoot(),
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
