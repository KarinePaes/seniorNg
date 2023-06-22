import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'sng-mouse-increase',
  templateUrl: './mouse-increase.component.html',
  styleUrls: ['./mouse-increase.component.css']
})
export class MouseIncreaseComponent {

    private cursorStyle: string = 'default';
    private cursorSize: number = 0;

    constructor(private el: ElementRef, private renderer: Renderer2) {}
    

    myFunction(){
      console.log('teste')
    }

    increaseCursor() {
      if(this.cursorSize<4){
        this.cursorSize++;
      }
      switch (this.cursorSize) {
        case 0:
          this.cursorStyle = 'default';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
          break;
        case 1:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize1.png), auto';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
  
          // Ainda precisa setar o cursor para todos os botões da tela
  
          break;
        case 2:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize2.png), auto';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
          break;
  
        case 3:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize3.png), auto';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
          break;
  
        case 4:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize4.png), auto';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
          break;
      }
    }

     decreaseCursor() {
      if(this.cursorSize>0){
        this.cursorSize--;
      }  
      switch (this.cursorSize) {
        case 0:
          this.cursorStyle = 'default';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
          break;
        case 1:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize1.png), auto';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
          break;
        case 2:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize2.png), auto';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
          break;
  
        case 3:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize3.png), auto';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
          break;
  
        case 4:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize4.png), auto';
          this.renderer.setStyle(document.documentElement, 'cursor', this.cursorStyle);
          break;
      }
}
}
