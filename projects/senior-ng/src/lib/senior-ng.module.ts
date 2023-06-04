import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { TextAdaptationModule } from './text-adaptation/text-adaptation.module';



@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    TextAdaptationModule
  ],
  exports: [
    ButtonComponent
  ]
})
export class SeniorNgModule { }
