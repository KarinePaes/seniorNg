import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { fromEvent, Subscription } from 'rxjs';
import { TooltipControlService } from '../services/TooltipControlService.service';

@Directive({
  selector: '[appControlledTooltip]'
})
export class ControlledTooltipDirective implements OnInit, OnDestroy {
  @Input('appControlledTooltip') tooltipId!: string;
  private showSubscription!: Subscription;
  private hideSubscription!: Subscription;

  constructor(
    private tooltip: MatTooltip,
    private tooltipControlService: TooltipControlService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    this.tooltip.disabled = true;
    this.showSubscription = this.tooltipControlService.showTooltip.subscribe(id => {
      if (id === this.tooltipId) {
        this.tooltip.disabled = false;
        this.tooltip.show();
      }
    });

    this.hideSubscription = this.tooltipControlService.hideTooltip.subscribe(id => {
      if (id === this.tooltipId) {
        this.tooltip.hide();
        this.tooltip.disabled = true;
      }
    });

    // Escondendo o tooltip ao clicar fora
    fromEvent<MouseEvent>(document, 'click').subscribe(event => {
      if (this.tooltip._isTooltipVisible() && !this.el.nativeElement.contains(event.target)) {
        this.tooltipControlService.dismissTooltip(this.tooltipId);
      }
    });
  }

  ngOnDestroy(): void {
    this.showSubscription.unsubscribe();
    this.hideSubscription.unsubscribe();
  }
}

