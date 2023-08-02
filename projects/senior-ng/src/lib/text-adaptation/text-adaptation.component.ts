import { Component, ElementRef, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sng-text-adaptation',
  templateUrl: './text-adaptation.component.html',
  styleUrls: ['./text-adaptation.component.scss'],
})
export class TextAdaptationComponent {
  fontSize: number = 14;
  lineHeight: number = 16;
  contrast: number = 1;
  color = 'black';
  contrastActive = false;

  @ViewChild('divContent', { static: false }) divContentRef!: ElementRef;


  @Input() enableFontSize: boolean = true;
  @Input() enableLineHeight: boolean = true;
  @Input() enableChangeContrast: boolean = true;


  @Input() minFontSize: number = 12;
  @Input() maxFontSize: number = 40;


  increaseFontSize() {
    this.fontSize = this.fontSize + 5;

    if(this.fontSize > this.maxFontSize) {
      this.fontSize = this.maxFontSize;
    }
  }

  decreaseFontSize() {
    this.fontSize = this.fontSize - 5;

    if(this.fontSize < this.minFontSize) {
      this.fontSize = this.minFontSize;
    }
  }

  increaseLineHeight() {
    this.lineHeight += 4;

    if(this.lineHeight > 40) {
      this.lineHeight = 16;
    }
  }

  changeContrast() {
    if (this.contrastActive) {
      this.decreaseContrast()
    } else {
      this.increaseContrast()
    }
  }

  increaseContrast() {
    this.contrast = 0; // Incrementa o contraste
    this.color = 'white';
    this.contrastActive = true;
  }

  decreaseContrast() {
    this.contrast = 1; // Incrementa o contraste
    this.color = 'black';
    this.contrastActive = false;
  }
}
