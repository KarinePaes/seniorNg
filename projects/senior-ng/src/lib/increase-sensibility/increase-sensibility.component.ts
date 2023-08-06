import { Component, Input } from '@angular/core';

@Component({
  selector: 'sng-increase-sensibility',
  templateUrl: './increase-sensibility.component.html',
  styleUrls: ['./increase-sensibility.component.css']
})
export class IncreaseSensibilityComponent {
  isHovered: boolean = false;
  
  @Input() label: string = '';
  @Input() ariaLabel: string = this.label;
}