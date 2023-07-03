import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[sngMouseSensibility]'
})
export class MouseSensibilityDirective {

  private width: number = 0;
  private height: number = 0;

  constructor(private elementRef: ElementRef) {}


  @HostListener('mouseenter')
  onMouseEnter() {
    this.width = this.elementRef.nativeElement.offsetWidth;
    this.height = this.elementRef.nativeElement.offsetHeight;
    this.elementRef.nativeElement.style.padding = `${ this.height/2 + 10}px ${ this.width/2 + 10}px`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.padding = '0';
  }

}
