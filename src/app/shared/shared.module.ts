import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { DndModule } from "ng2-dnd";
import { AceEditorModule } from "ng-ace-tern";
import { SchemaFormModule } from "../../lib/schema-form.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule.forRoot(),
        AceEditorModule,
        SchemaFormModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
        AceEditorModule,
        SchemaFormModule
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule:SharedModule,
            providers:[]
        }
    }
}