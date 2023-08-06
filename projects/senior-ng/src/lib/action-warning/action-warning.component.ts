import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'lib-modal-content',
  templateUrl: './action-warning.component.html',
  styleUrls: ['./action-warning.component.scss']
})
export class ActionWarningComponent {

  modalTitle: string;
  modalContent: string;
  buttonPrimary: string;
  buttonSecondary: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ActionWarningComponent>
    ) { 
    this.modalTitle = data.title || 'title';
    this.modalContent = data.content || 'Você está executando uma ação importante, tem certeza que deseja prosseguir?';
    this.buttonPrimary = data.buttonPrimary || 'Confirmar';
    this.buttonSecondary = data.buttonSecondary || 'Cancelar';
  }

  onButtonPrimaryClick() {
    this.dialogRef.close(2); // Fechar o modal e retornar 1 para o componente que o chamou
  }

  onButtonSecondaryClick() {
    this.dialogRef.close(1); // Fechar o modal e retornar 2 para o componente que o chamou
  }
}