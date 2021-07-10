import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  countries = [
    { id: 1001, name: 'Italy', lat: 42, lng: 12 },
    { id: 1002, name: 'usa', lat: 43, lng: 13 },
    { id: 1002, name: 'Gibuti', lat: 44, lng: 14 },
  ];
  mylat: number = 45;
  mylng: number = 10;
  updatemap(tab: any) {
    console.log('tab clickato', tab);
    this.mylat = tab.lat;
    this.mylng = tab.lng;
  }
}
