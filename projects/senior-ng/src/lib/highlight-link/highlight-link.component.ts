import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sng-highlight-link',
  templateUrl: './highlight-link.component.html',
  styleUrls: ['./highlight-link.component.scss']
})
export class HighlightLinkComponent implements OnInit {

  @Input() link: string = '';
  @Input() textLink: string = '';
  @Input() textTooltip: string = '';
  @Input() ariaLabel: string = '';

  constructor() { }

  ngOnInit() {
  }

}
