import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BootstrapFormComponent } from "./pages/bootstrap-form/bootstrap-form.component";
import { ZorroFormComponent } from "./pages/zorro-form/zorro-form.component";
import { SharedModule } from "./shared/shared.module";
import { DndComponent } from "./pages/dnd/dnd.component";

const routes: Routes = [
    { path: '', redirectTo: 'bootstrap', pathMatch: 'full' },
    { path: 'dnd', component: DndComponent },
    { path: 'bootstrap', component: BootstrapFormComponent },
    { path: 'zorro', component: ZorroFormComponent }
];

@NgModule({
    declarations: [
        BootstrapFormComponent,
        ZorroFormComponent,
        DndComponent
    ],
    imports: [SharedModule, RouterModule.forRoot(routes, { useHash: true })],
    exports: []
})
export class AppRoutingModule { }