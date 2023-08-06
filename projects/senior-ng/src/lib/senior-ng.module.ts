import { NgModule } from '@angular/core';

import { TextAdaptationModule } from './text-adaptation/text-adaptation.module';
import { HighlightLinkModule } from './highlight-link/highlight-link.module';
import { ActionWarningModule } from './action-warning/action-warning.module';
import { DropdownToListModule } from './dropdownToList/dropdownToList.module';
import { HintModule } from './hint/hint.module';
import { MouseControlerModule } from './mouse-controler/mouse-controler.module';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [
  ],
  imports: [
    TextAdaptationModule,
    HighlightLinkModule,
    DropdownToListModule,
    MouseControlerModule,
    ActionWarningModule,
    HintModule,
    DirectivesModule
  ],
  exports: [
    TextAdaptationModule,
    HighlightLinkModule,
    DropdownToListModule,
    MouseControlerModule,
    ActionWarningModule,
    HintModule,
    DirectivesModule
  ]
})
export class SeniorNgModule { }
