import { Component, Input } from '@angular/core';
import { TooltipControlService } from '../../services/TooltipControlService.service';

@Component({
  selector: 'sng-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss'],
})
export class HintComponent {
  constructor(private tooltipControlService: TooltipControlService) {}

  @Input() idHint: string = '';
  showTooltip(id: string) {
    this.tooltipControlService.triggerTooltip(id);
  }
}
