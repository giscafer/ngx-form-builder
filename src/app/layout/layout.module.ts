import { SharedModule } from "../shared/shared.module";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { NavComponent } from "./nav/nav.component";


const COMPONENTS = [
    NavComponent
]


@NgModule({
    imports: [RouterModule, SharedModule],
    providers: [],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})
export class LayoutModule { }