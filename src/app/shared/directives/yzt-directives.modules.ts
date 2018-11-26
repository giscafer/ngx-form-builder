import { NgModule } from "@angular/core";
import { DragBoxDirective } from "./drag-box.directive";
import { KeyEnterDirective } from "./key-enter.directive";

@NgModule({
    declarations: [
        DragBoxDirective,
        KeyEnterDirective
    ],
    exports: [
        DragBoxDirective,
        KeyEnterDirective
    ]
})
export class DirectivesModule {}