import { Component } from '@angular/core';
import { ActionWarningDirective } from 'projects/senior-ng/src/directives/ActionWarning.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-action-warning',
  templateUrl: './action-warning.component.html',
  styleUrls: ['./action-warning.component.css']
})
export class ActionWarningComponent {
  
  // buttonClickSubscription: Subscription;

  constructor(
    // private modalService: ActionWarningDirective
    ) {
    // this.buttonClickSubscription = this.modalService.buttonClicked.subscribe(button => {
    //   if (button === 1) {
    //     console.log('Botão 1 clicado!');
    //   } else if (button === 2) {
    //     console.log('Botão 2 clicado!');
    //   }
    // });
  }

  ngOnDestroy() {
    // this.buttonClickSubscription.unsubscribe();
  }
}
