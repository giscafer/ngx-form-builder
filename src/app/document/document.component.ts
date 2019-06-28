import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DATA } from './data';

@Component({
    selector: 'app-document',
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
    data = DATA;
    item: any = null;

    constructor(
        private route: Router,
        private activatedRoute: ActivatedRoute,
        @Inject(DOCUMENT) private doc: any
    ) {}

    ngOnInit(): void {
        const element = this.doc.getElementsByTagName('body')[0];
        /* this.activatedRoute.params.subscribe(params => {
            const id = params.id || 'getting-started';
            let item: any;
            Object.keys(DATA).forEach(key => {
                if (!item) item = (DATA[key] as any[]).find(w => w.id === id);
            });
            if (!item) {
                this.route.navigateByUrl('/document/getting-started');
                return;
            }
            if (!item.content) item.content = `未实现`;
            this.item = item;
            element.scrollIntoView();
        }); */
    }
}
