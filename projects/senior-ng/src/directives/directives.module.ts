import { NgModule } from '@angular/core';
import { ControlledTooltipDirective } from './ControlledTooltipDirective.directive';
import { ActionWarningDirective } from './ActionWarning.directive';

@NgModule({
  imports: [],
  declarations: [ControlledTooltipDirective, ActionWarningDirective],
  exports: [ControlledTooltipDirective, ActionWarningDirective]
})
export class DirectivesModule { }
