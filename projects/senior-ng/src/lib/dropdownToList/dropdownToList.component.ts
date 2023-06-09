import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sng-dropdown-to-list',
  templateUrl: './dropdownToList.component.html',
  styleUrls: ['./dropdownToList.component.scss']
})
export class DropdownToListComponent implements OnInit {


  @Input() itensList: string[] = [];
  @Input() labelInput: string = '';
  selectedItem: string = '';
  dropdowToList: string = 'dropdown'

  constructor() { }

  ngOnInit() {
    this.itensList = ['Winter', 'Spring', 'Summer', 'Autumn'];
  }

  changeToList() {
    this.dropdowToList = 'list'
  }

  changeToDropdown() {
    this.dropdowToList = 'dropdown'
  }

}
