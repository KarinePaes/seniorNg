import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'sng-mouse-controler',
  templateUrl: './mouse-controler.component.html',
  styleUrls: ['./mouse-controler.component.scss']
})
export class MouseControlerComponent {

    private cursorStyle: string = 'default';
    private cursorSize: number = 0;

  constructor(private renderer: Renderer2) {}

    myFunction(){
      console.log('teste')
    }

    increaseCursor() {
      if(this.cursorSize<4){
        this.cursorSize++;
      }
      const elements = document.querySelectorAll('*');
      switch (this.cursorSize) {
        case 0:
          this.cursorStyle = 'default';
          elements.forEach(element => {
            this.renderer.setStyle(element, 'cursor',this.cursorStyle);
          });
          break;
        case 1:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize1.png), pointer';
          elements.forEach(element => {
            this.renderer.setStyle(element, 'cursor',this.cursorStyle);
          });
          break;
        case 2:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize2.png), pointer';
          elements.forEach(element => {
            this.renderer.setStyle(element, 'cursor',this.cursorStyle);
          });
          break;

        case 3:
          this.cursorStyle =
          'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize3.png), pointer';
        elements.forEach(element => {
          this.renderer.setStyle(element, 'cursor',this.cursorStyle);
        });
          break;

        case 4:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize4.png), pointer';
          elements.forEach(element => {
            this.renderer.setStyle(element, 'cursor',this.cursorStyle);
          });
          break;
      }
    }

     decreaseCursor() {
      if(this.cursorSize>0){
        this.cursorSize--;
      }
      const elements = document.querySelectorAll('*');
      switch (this.cursorSize) {
        case 0:
          this.cursorStyle = 'default';
          elements.forEach(element => {
            this.renderer.setStyle(element, 'cursor',this.cursorStyle);
          });
          break;
        case 1:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize1.png), pointer';
          elements.forEach(element => {
            this.renderer.setStyle(element, 'cursor',this.cursorStyle);
          });
          break;
        case 2:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize2.png), pointer';
          elements.forEach(element => {
            this.renderer.setStyle(element, 'cursor',this.cursorStyle);
          });
          break;

        case 3:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize3.png), pointer';
          elements.forEach(element => {
            this.renderer.setStyle(element, 'cursor',this.cursorStyle);
          });
          break;

        case 4:
          this.cursorStyle =
            'url(https://ng-senior.s3.sa-east-1.amazonaws.com/cursor/arrowSize4.png), pointer';
          elements.forEach(element => {
            this.renderer.setStyle(element, 'cursor',this.cursorStyle);
          });
          break;
      }
}
}
