import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionWarningComponent } from './action-warning.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatTooltipModule],
  declarations: [ActionWarningComponent],
  exports: [ActionWarningComponent],
})
export class ActionWarningModule {

}
