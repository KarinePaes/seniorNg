import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseIncreaseComponent } from './mouse-increase.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MouseIncreaseComponent],
  exports: [MouseIncreaseComponent],
})
export class MouseIncreaseModule { }
