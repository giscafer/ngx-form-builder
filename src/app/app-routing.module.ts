import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BootstrapFormComponent } from "./pages/bootstrap-form/bootstrap-form.component";
import { ZorroFormComponent } from "./pages/zorro-form/zorro-form.component";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [
    // { path: '', redirectTo: 'zorro', pathMatch: 'full' },
    { path: 'bootstrap', component: BootstrapFormComponent },
    { path: 'zorro', component: ZorroFormComponent }
];

@NgModule({
    declarations: [
        BootstrapFormComponent,
        ZorroFormComponent
    ],
    imports: [SharedModule, RouterModule.forRoot(routes)],
    exports: []
})
export class AppRoutingModule { }