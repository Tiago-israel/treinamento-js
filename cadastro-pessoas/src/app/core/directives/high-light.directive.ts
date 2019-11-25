import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
        el.nativeElement.style.color = "#fff";
    }
}

//<p highlight>Hello World</p>
