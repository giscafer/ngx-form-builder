import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "./shared/shared.module";
import { DndModule } from "../lib/dnd/dnd.module";
import { ZorroFormComponent } from "./pages/zorro-form/zorro-form.component";
import { BootstrapFormComponent } from "./pages/bootstrap-form/bootstrap-form.component";
import { DndComponent } from "./pages/dnd-form/dnd.component";

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
    imports: [SharedModule, DndModule.forRoot(), RouterModule.forRoot(routes, { useHash: true })],
    exports: []
})
export class AppRoutingModule { }