import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';
import { TooltipControlService } from '../services/TooltipControlService.service';

@Directive({
  selector: '[appControlledTooltip]',
})
export class ControlledTooltipDirective implements OnInit, OnDestroy {
  @Input('appControlledTooltip') tooltipId!: string;
  private subscription!: Subscription;

  constructor(
    private tooltip: MatTooltip,
    private tooltipControlService: TooltipControlService
  ) {}

  ngOnInit(): void {
    console.log('Directive: ', this.tooltipId);
    this.tooltip.disabled = true;  // Desabilitar tooltip ao passar o mouse

    this.subscription = this.tooltipControlService.showTooltip.subscribe(
      (id) => {
        if (id === this.tooltipId) {
          this.tooltip.disabled = false
          this.tooltip.show();

          setTimeout(() => {
            // Desabilitar o tooltip após ocultar
            this.tooltip.hide();
            this.tooltip.disabled = true;
          }, 3000); // Esconder depois de 3 segundos
        }


      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
