import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TooltipControlService {
  showTooltip = new Subject<string>();
  hideTooltip = new Subject<string>();

  triggerTooltip(tooltipId: string) {
    this.showTooltip.next(tooltipId);
  }

  dismissTooltip(tooltipId: string) {
    this.hideTooltip.next(tooltipId);
  }
}
