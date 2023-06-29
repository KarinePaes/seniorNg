import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeniorNgModule } from 'projects/senior-ng/src/public-api';

/* Imports Materials */
import {MatCardModule} from '@angular/material/card';

/* Imports SeniorNg */
import { TextAdaptationModule } from 'projects/senior-ng/src/lib/text-adaptation/text-adaptation.module';
import { HighlightLinkModule } from 'projects/senior-ng/src/lib/highlight-link/highlight-link.module';
import { DropdownToListModule } from 'projects/senior-ng/src/lib/dropdownToList/dropdownToList.module';
import { MouseIncreaseModule } from 'projects/senior-ng/src/lib/mouse-increase/mouse-increase.module';
import { ActionWarningModule } from 'projects/senior-ng/src/lib/action-warning/action-warning.module';
import { HintModule } from 'projects/senior-ng/src/lib/hint/hint.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextAdaptationModule,
    HighlightLinkModule,
    DropdownToListModule,
    MouseIncreaseModule,
    MatCardModule,
    ActionWarningModule,
    HintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
