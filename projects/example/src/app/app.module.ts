import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextAdaptationModule } from 'projects/senior-ng/src/lib/text-adaptation/text-adaptation.module';
import { HighlightLinkModule } from 'projects/senior-ng/src/lib/highlight-link/highlight-link.module';
import { DropdownToListModule } from 'projects/senior-ng/src/lib/dropdownToList/dropdownToList.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextAdaptationModule,
    HighlightLinkModule,
    DropdownToListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
