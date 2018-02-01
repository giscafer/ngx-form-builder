import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SchemaFormModule } from '../lib';

// third part libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AceEditorDirective } from 'ng2-ace';


import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    AceEditorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    CommonModule,
    SchemaFormModule,
    NgZorroAntdModule.forRoot(),
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
