
import {
    Directive,
    Renderer2,
    HostListener,
    ElementRef,
    HostBinding,
    ContentChild,
    Input
} from "@angular/core";
import { Observable } from "rxjs/Observable";

interface PageSize {
    pageX: number;
    pageY: number;
}

@Directive({
    selector: '[drag-box]'
})
/**
 * 常规Hostlistener监听事件
 */
export class DragBoxDirective {
    @Input() box: any;
    pageSize: PageSize;
    dragging: boolean;

    constructor(private rd2: Renderer2,
        private el: ElementRef) { }

    ngOnInit() {
        const { x, y } = this.center(this.box);
        this.center(this.box);
    }

    ngOnDestroy() {
        this.dragging = false;
    }

    @HostListener('mousedown', ['$event', '$event.target'])
    mousedown(event: MouseEvent, target) {
        if (target.className.indexOf('ant-modal-close-x') !== -1) return;
        event.stopPropagation();
        this.dragging = true;
        this.pageSize = event;
    }

    @HostListener('document:mousemove', ['$event'])
    mousemove({ pageX, pageY }) {
        const dom = this.box;
        if (this.dragging) {
            let deltaX = pageX - this.pageSize.pageX,
                deltaY = pageY - this.pageSize.pageY,
                distanceX = document.documentElement.offsetWidth - dom.offsetWidth,
                distanceY = document.documentElement.offsetHeight - dom.offsetHeight,
                leftPos = parseInt(dom.offsetLeft),
                topPos = parseInt(dom.offsetTop);

            dom.style.left = (leftPos >= 0 ? (leftPos <= distanceX ? leftPos + deltaX : distanceX) : 0) + 'px';
            dom.style.top = (topPos >= 0 ? (topPos <= distanceY ? topPos + deltaY : distanceY) : 0) + 'px';

            this.pageSize = { pageX, pageY };
        }
        return false;
    }

    @HostListener('document:mouseup', ['$event'])
    mouseup(event: MouseEvent) {
        this.dragging = false;
    }

    @HostListener('window:resize', ['$event'])
    resize(event: MouseEvent) {
        this.center(this.box);
    }


    getViewport(): any {
        let win = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            w = win.innerWidth || e.clientWidth || g.clientWidth,
            h = win.innerHeight || e.clientHeight || g.clientHeight;

        return { width: w, height: h };
    }

    center(ele: any) {
        const viewport = this.getViewport(),
            x = Math.max((viewport.width - ele.offsetWidth) / 2, 0),
            y = Math.max((viewport.height - ele.offsetHeight) / 2, 0);

        this.box.style.position = `fixed`;
        this.box.style.zIndex = 1000;
        this.box.style.left = x + 'px';
        this.box.style.top = y + 'px';

        return { x, y }
    }
}