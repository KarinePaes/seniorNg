import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mouseIncrease]',
})
export class MouseIncreaseDirective {
  private cursorStyle: string = 'default';
  private cursorSize: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onMouseEnter() {
    this.increaseCursor();
  }

  private increaseCursor() {
    this.cursorSize++;
    console.log(this.cursorSize);

    switch (this.cursorSize) {
      case 0:
        this.cursorStyle = 'default';
        this.renderer.setStyle(document.body, 'cursor', this.cursorStyle);
        break;
      case 1:
        this.cursorStyle =
          'url(https://ng-senior.s3.sa-east-1.amazonaws.com/kunai.cur), auto';
        this.renderer.setStyle(document.body, 'cursor', this.cursorStyle);

        // Ainda precisa setar o cursor para todos os botões da tela

        break;
      case 2:
        this.cursorStyle =
          'url(https://ng-senior.s3.sa-east-1.amazonaws.com/kunai-_1_.cur), auto';
        this.renderer.setStyle(document.body, 'cursor', this.cursorStyle);
        break;
      // case 3:
      // this.cursorStyle =
      //   'url(), auto';
      // this.renderer.setStyle(document.body, 'cursor', this.cursorStyle);
      // break;
    }
  }
}
