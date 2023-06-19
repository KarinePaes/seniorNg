import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sng-text-adaptation',
  templateUrl: './text-adaptation.component.html',
  styleUrls: ['./text-adaptation.component.scss'],
})
export class TextAdaptationComponent {
  @ViewChild('content') content: TemplateRef<any> | undefined;

  @Input() fontSize: number = 14
  @Input() lineHeight: number = 20;
  @Input() color: string = 'black';

  public contrast: number = 1;
  private contrastActive = false;

  increaseFontSize() {
    this.fontSize++;
  }

  decreaseFontSize() {
    this.fontSize--;
  }

  increaseLineHeight() {
    this.lineHeight += 2; // Incrementa o espaçamento entre as linhas
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
