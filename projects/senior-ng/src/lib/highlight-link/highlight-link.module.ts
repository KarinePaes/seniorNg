import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightLinkComponent } from './highlight-link.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [HighlightLinkComponent],
  exports: [HighlightLinkComponent]
})
export class HighlightLinkModule { }
