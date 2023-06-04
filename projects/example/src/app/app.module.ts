import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextAdaptationModule } from 'projects/senior-ng/src/lib/text-adaptation/text-adaptation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TextAdaptationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
