
import {
    Directive,
    Renderer2,
    HostListener,
    ElementRef,
    HostBinding,
    ContentChild,
    Input
} from "@angular/core";

@Directive({
    selector: '[key-enter]'
})
/**
 * 常规Hostlistener监听事件
 */
export class KeyEnterDirective {

    @Input('key-enter') nzContent: any;

    constructor(private el: ElementRef) {}

    @HostListener('keydown', ['$event'])
    keydown(event) {
        var e = event || window.event;
        if (e && e.keyCode == 13) { //回车键的键值为13
        }
    }
}