import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'sng-action-warning',
  templateUrl: './action-warning.component.html',
  styleUrls: ['./action-warning.component.scss'],
})
export class ActionWarningComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

  }

  ngOnInit() {}
}

@Component({
  selector: 'dialog-content-example-dialog',
  template: ` <h2 mat-dialog-title>Título da Modal</h2>
    <mat-dialog-content>Conteúdo da Modal</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Fechar</button>
    </mat-dialog-actions>`,
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class DialogContentExampleDialog {}
