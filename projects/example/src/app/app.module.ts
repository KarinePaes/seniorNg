import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeniorNgModule } from 'projects/senior-ng/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SeniorNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
