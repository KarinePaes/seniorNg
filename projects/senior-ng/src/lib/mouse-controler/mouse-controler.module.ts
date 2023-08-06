import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MouseControlerComponent } from './mouse-controler.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MouseControlerComponent],
  exports: [MouseControlerComponent],
})
export class MouseControlerModule { }
