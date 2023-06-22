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
import { MouseIncreaseModule } from 'projects/senior-ng/src/lib/mouse-increase/mouse-increase.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextAdaptationModule,
    HighlightLinkModule,
    MouseIncreaseModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
