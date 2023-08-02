import { Component, Input } from '@angular/core';

@Component({
  selector: 'sng-dropdown-to-list',
  templateUrl: './dropdownToList.component.html',
  styleUrls: ['./dropdownToList.component.scss']
})
export class DropdownToListComponent {


  @Input() itensList: string[] = [];
  @Input() labelInput: string = '';
  selectedItem: string = '';
  dropdowToList: string = 'dropdown'

  constructor() { }

  changeToList() {
    this.dropdowToList = 'list'
  }

  changeToDropdown() {
    this.dropdowToList = 'dropdown'
  }

}
