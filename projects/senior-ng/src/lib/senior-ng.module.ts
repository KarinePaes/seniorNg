import { NgModule } from '@angular/core';
import { MouseIncreaseComponent } from './mouse-increase/mouse-increase.component';
import { MouseIncreaseDirective } from '../directives/mouse-increase.directive';



@NgModule({
  declarations: [
    MouseIncreaseComponent,
    MouseIncreaseDirective
  ],
  imports: [
  ],
  exports: [
    MouseIncreaseComponent,
    MouseIncreaseDirective
  ]
})
export class SeniorNgModule { }
