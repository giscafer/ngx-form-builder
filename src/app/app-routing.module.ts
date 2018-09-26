import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SharedModule } from "./shared/shared.module";
import { ZorroFormComponent } from "./pages/zorro-form/zorro-form.component";
import { BootstrapFormComponent } from "./pages/bootstrap-form/bootstrap-form.component";
import { DndComponent } from "./pages/dnd-form/dnd.component";
import { DocumentComponent } from "./document/document.component";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndService } from "./pages/dnd-form/dnd.service";

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
        RouterModule.forRoot(routes, { useHash: true }),
        DragDropModule,
    ],
    exports: [],
    providers: [DndService]
})
export class AppRoutingModule { }