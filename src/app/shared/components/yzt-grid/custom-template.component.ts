import {
    Component,
    Input,
    OnInit,
    NgModule,
    ContentChild,
    TemplateRef,
    ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIGridComponent } from './yzt-grid.component';

@Component({
    selector: 'custom-template',
    template: `
        <ng-container></ng-container>
    `
})
export class CustomTemplateComponent {
    @ContentChild('customTemplate', { static: false })
    customTemplate: TemplateRef<any>;
    @Input() outField = '';
    @Input('ui_grid') uiGrid: UIGridComponent;

    constructor() {}

    ngOnInit() {}

    ngOnChanges(simple) {
        if (this.uiGrid && simple['outField']) {
            this.uiGrid.getCusTmplInstance(this);
        }
    }
}

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [CustomTemplateComponent],
    exports: [CustomTemplateComponent]
})
export class CustomTemplateModule {}
