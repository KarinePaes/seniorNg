import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ActionWarningComponent } from '../public-api';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalControlService } from '../services/ModalControlService.service';
import { Subject } from 'rxjs';

@Directive({
  selector: '[action-warning]'
})
export class ActionWarningDirective {
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() buttonPrimary: string = 'Prosseguir';
  @Input() buttonSecondary: string = 'Cancelar';

  private buttonClickedSubject = new Subject<number>();

  constructor(private modalService: ModalControlService) { }

  @HostListener('click') onClick() {
    const dialogRef = this.modalService.openModal(this.title, this.content, this.buttonPrimary, this.buttonSecondary);
    dialogRef.afterClosed().subscribe((result: any) => {
      this.buttonClickedSubject.next(result);
    });
  }

  get buttonClicked() {
    return this.buttonClickedSubject.asObservable();
  }
}

