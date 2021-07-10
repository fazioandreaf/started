import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  mylat: number = 45;
  mylng: number = 10;
  updatemap() {
    this.mylat = 110;
    this.mylng = 50;
  }
}
