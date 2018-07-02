import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// third part libs
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { DndModule } from '../lib/dnd/dnd.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { StartUpService } from './services/startup.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    DndModule.forRoot(),
    LayoutModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, StartUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
