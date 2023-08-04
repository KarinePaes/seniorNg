import { NgModule } from '@angular/core';

import { TextAdaptationModule } from './text-adaptation/text-adaptation.module';
import { HighlightLinkModule } from './highlight-link/highlight-link.module';
import { ActionWarningModule } from './action-warning/action-warning.module';
import { DropdownToListModule } from './dropdownToList/dropdownToList.module';
import { HintModule } from './hint/hint.module';
import { MouseIncreaseModule } from './mouse-increase/mouse-increase.module';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
  ],
  imports: [
    TextAdaptationModule,
    HighlightLinkModule,
    DropdownToListModule,
    MouseIncreaseModule,
    ActionWarningModule,
    HintModule,
    DirectivesModule
  ],
  exports: [
    TextAdaptationModule,
    HighlightLinkModule,
    DropdownToListModule,
    MouseIncreaseModule,
    ActionWarningModule,
    HintModule,
    DirectivesModule
  ]
})
export class SeniorNgModule { }
