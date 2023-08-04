import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintComponent } from './hint.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatTooltipModule, DirectivesModule],
  declarations: [	HintComponent],
  exports: [HintComponent, MatButtonModule, MatTooltipModule, DirectivesModule],
})
export class HintModule {}
