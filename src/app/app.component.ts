import { Component } from '@angular/core';
import { Country } from './model/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  countries: Country[] = [
    { id: 1001, name: 'Italy', lat: 42, lng: 12 },
    { id: 1002, name: 'usa', lat: 43, lng: 13 },
    { id: 1002, name: 'Gibuti', lat: 44, lng: 14 },
  ];
  // inizializzazione
  constructor() {
    this.current = this.countries[0];
  }
  // credo un elemento dalla classe coutry
  current: Country;

  mylat: number = 45;
  mylng: number = 10;
  updatemap(tab: Country) {
    this.current = tab;
  }
}
