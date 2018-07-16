import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AceEditorModule } from "ng-ace-tern";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { NgxMdModule } from 'ngx-md';
import { HighlightModule } from "ngx-highlightjs";
import { SchemaFormModule } from "../../lib/schema-form.module";
import { CodeSliderComponent } from "./components/code-slider/code-slider.component";

const COMPONENTS = [
    CodeSliderComponent
]
@NgModule({
    declarations: [
        ...COMPONENTS
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule.forRoot(),
        AceEditorModule,
        SchemaFormModule,
        HighlightModule.forRoot({ theme: 'googlecode' }),
        NgxMdModule.forRoot(),
    ],
    exports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        AceEditorModule,
        SchemaFormModule,
        NgxMdModule,
        ...COMPONENTS
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: []
        }
    }
}