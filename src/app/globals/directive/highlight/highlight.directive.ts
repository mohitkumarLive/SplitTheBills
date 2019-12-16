import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string;

    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = this.highlightColor;
    }
}
