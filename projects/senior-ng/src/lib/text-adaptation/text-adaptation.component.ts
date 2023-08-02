import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sng-text-adaptation',
  templateUrl: './text-adaptation.component.html',
  styleUrls: ['./text-adaptation.component.scss'],
})
export class TextAdaptationComponent {
  @ViewChild('content') content: TemplateRef<any> | undefined;
  fontSize = 14;
  lineHeight = 20; // Inicializando lineHeight com um valor padrão.
  contrast = 1; // Inicializando o contraste com o valor padrão.
  color = 'black';
  contrastActive = false;

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
