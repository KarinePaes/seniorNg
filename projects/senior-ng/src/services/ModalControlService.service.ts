import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { ActionWarningComponent } from '../public-api';

@Injectable({ providedIn: 'root' })
export class ModalControlService {
    constructor(private dialog: MatDialog) { }

    buttonClicked$ = new EventEmitter<{ button: number }>();

    openModal(title: string, content: string, buttonPrimary: string, buttonSecondary: string): any {
      const dialogRef = this.dialog.open(ActionWarningComponent, {
        data: { title, content, buttonPrimary, buttonSecondary }
      });

     return dialogRef;
    }
}
