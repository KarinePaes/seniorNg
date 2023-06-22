import { NgModule } from '@angular/core';
import { MouseIncreaseComponent } from './mouse-increase/mouse-increase.component';
import { MouseIncreaseDirective } from '../directives/mouse-increase.directive';

import { TextAdaptationModule } from './text-adaptation/text-adaptation.module';



@NgModule({
  declarations: [
    MouseIncreaseDirective
  ],
  imports: [
    TextAdaptationModule,
  ],
  exports: [
    MouseIncreaseDirective
  ]
})
export class SeniorNgModule { }
