import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionWarningComponent } from './action-warning.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DirectivesModule } from '../../public-api';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatTooltipModule, DirectivesModule],
  declarations: [ActionWarningComponent],
  exports: [ActionWarningComponent, DirectivesModule],
})
export class ActionWarningModule {

}
