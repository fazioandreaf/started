import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../model/country';

@Component({
  // il? è per rendere opzionale la condizione
  selector: 'tabbar',
  template: ` <div class="btn btn-group">
    <button
      class="btn btn-success"
      [ngClass]="{ 'btn-success': active?.id === tab.id }"
      *ngFor="let tab of items"
      (click)="itemClickHandler(tab)"
    >
      {{ tab.name }}
    </button>
  </div>`,
})
export class TabComponent {
  // inizializzo l items con il construttore,idem per active
  constructor() {
    this.items = [{ id: 1, name: 'ciao', lat: 23, lng: 23 }];
    this.active = { id: 1, name: 'ciao', lat: 23, lng: 23 };
  }
  active: Country;
  @Input() items: Country[];
  @Output() onTabClick: EventEmitter<Country> = new EventEmitter();

  itemClickHandler(tab: Country) {
    // console.loge(tab)
    this.onTabClick.emit(tab);
    // gestione della classe
    this.active = tab;
  }
}
