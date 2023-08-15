import { NgModule } from '@angular/core';
import { ControlledTooltipDirective } from './ControlledTooltipDirective.directive';
import { ActionWarningDirective } from './ActionWarning.directive';

@NgModule({
  imports: [DirectivesModule],
  declarations: [ControlledTooltipDirective, ActionWarningDirective],
  exports: [ControlledTooltipDirective, ActionWarningDirective, DirectivesModule]
})
export class DirectivesModule { }
