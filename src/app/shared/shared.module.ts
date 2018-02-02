import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule,
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule:SharedModule,
            providers:[

            ]
        }
    }
}