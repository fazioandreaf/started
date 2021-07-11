import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Country } from '../model/country';

@Component({
  selector: 'tabbar',
  template: ` <div class="btn btn-group">
    <button
      class="btn"
      *ngFor="let tab of items"
      (click)="itemClickHandler(tab)"
    >
      {{ tab.name }}
    </button>
  </div>`,
})
export class TabComponent {
  // inizializzo l items con il construttore
  constructor() {
    this.items = [{ id: 1, name: 'ciao', lat: 23, lng: 23 }];
  }

  @Input() items: Country[];
  @Output() onTabClick: EventEmitter<Country> = new EventEmitter();

  itemClickHandler(tab: Country) {
    // console.loge(tab)
    this.onTabClick.emit(tab);
  }
}
