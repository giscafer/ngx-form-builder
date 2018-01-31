import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";


import { NavComponent } from "./nav/nav.component";


const COMPONENTS=[
    NavComponent
]


@NgModule({
    imports: [SharedModule],
    providers: [],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class LayoutModule { }