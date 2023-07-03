import { NgModule } from '@angular/core';
import { ControlledTooltipDirective } from './ControlledTooltipDirective.directive';
import { MouseSensibilityDirective } from './mouse-sensibility.directive';

@NgModule({
  imports: [],
  declarations: [
    ControlledTooltipDirective,
    MouseSensibilityDirective,
   ],
  exports: [
    ControlledTooltipDirective,
    MouseSensibilityDirective
  ]
})
export class DirectivesModule { }
