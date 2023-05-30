import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { MouseIncreaseDirective } from '../directives/mouse-increase.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    MouseIncreaseDirective
  ],
  imports: [
  ],
  exports: [
    ButtonComponent,
    MouseIncreaseDirective
  ]
})
export class SeniorNgModule { }
