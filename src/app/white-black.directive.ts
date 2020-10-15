import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appWhiteBlack]'
})
export class WhiteBlackDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = "white"
  }

}
