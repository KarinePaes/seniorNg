import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModule, SeniorNgModule } from 'projects/senior-ng/src/public-api';

/* Imports Materials */
import {MatCardModule} from '@angular/material/card';

/* Imports SeniorNg */
import { TextAdaptationModule } from 'projects/senior-ng/src/lib/text-adaptation/text-adaptation.module';
import { HighlightLinkModule } from 'projects/senior-ng/src/lib/highlight-link/highlight-link.module';
import { DropdownToListModule } from 'projects/senior-ng/src/lib/dropdownToList/dropdownToList.module';
import { MouseControlerModule } from 'projects/senior-ng/src/lib/mouse-controler/mouse-controler.module';
import { ActionWarningModule } from 'projects/senior-ng/src/lib/action-warning/action-warning.module';
import { IncreaseSensibilityModule } from 'projects/senior-ng/src/lib/increase-sensibility/increase-sensibitily.module'
import { HintModule } from 'projects/senior-ng/src/lib/hint/hint.module';
import { ActionWarningComponent } from './action-warning/action-warning.component';
import { HomeComponent } from './home/home.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { HighlightLinkComponent } from './highlight-link/highlight-link.component';
import { HintComponent } from './hint/hint.component';
import { IncreaseMouseComponent } from './increase-mouse/increase-mouse.component';
import { MouseControlerComponent } from './mouse-controler/mouse-controler.component';
import { TextAdaptationComponent } from './text-adaptation/text-adaptation.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionWarningComponent,
    HomeComponent,
    DropdownListComponent,
    HighlightLinkComponent,
    HintComponent,
    IncreaseMouseComponent,
    MouseControlerComponent,
    TextAdaptationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextAdaptationModule,
    HighlightLinkModule,
    DropdownToListModule,
    MouseControlerModule,
    MatCardModule,
    ActionWarningModule,
    HintModule,
    IncreaseSensibilityModule,
    DirectivesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
