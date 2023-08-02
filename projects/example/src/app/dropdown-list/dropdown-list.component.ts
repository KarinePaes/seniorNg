import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.css']
})
export class DropdownListComponent {

  items: string[] = ['Maçã', 'Banana', 'Laranja', 'Melancia'];
  input: string = "Selecione uma fruta:"
}
