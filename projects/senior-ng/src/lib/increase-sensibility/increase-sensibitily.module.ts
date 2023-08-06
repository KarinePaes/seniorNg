import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncreaseSensibilityComponent } from './increase-sensibility.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule
  ],
  declarations: [IncreaseSensibilityComponent],
  exports: [IncreaseSensibilityComponent]
})
export class IncreaseSensibilityModule { }
