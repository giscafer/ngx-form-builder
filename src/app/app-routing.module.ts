import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "./shared/shared.module";
import { DndModule } from "../lib/dnd/dnd.module";
import { ZorroFormComponent } from "./pages/zorro-form/zorro-form.component";
import { BootstrapFormComponent } from "./pages/bootstrap-form/bootstrap-form.component";
import { DndComponent } from "./pages/dnd-form/dnd.component";
import { DocumentComponent } from "./document/document.component";

const routes: Routes = [
    { path: '', redirectTo: 'zorro', pathMatch: 'full' },
    { path: 'dnd', component: DndComponent },
    { path: 'bootstrap', component: BootstrapFormComponent },
    { path: 'zorro', component: ZorroFormComponent },
    { path: 'document', redirectTo: 'document/getting-started', pathMatch: 'full' },
    {
        path: 'document/:id',
        component: DocumentComponent
    }
];

@NgModule({
    declarations: [
        BootstrapFormComponent,
        ZorroFormComponent,
        DndComponent,
        DocumentComponent
    ],
    imports: [
        SharedModule,
        DndModule.forRoot(),
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: []
})
export class AppRoutingModule { }