import { Component } from '@angular/core';
// per far diventare un file un component di angular bisogna decorarlo
@Component({
  // nome dell component
  selector: 'gmap',
  template:
    '<img src="https://maps.googleapis.com/maps/api/staticmap?center=42,14&zoom=4&size=400x100&key=AIzaSyCbWfkML0gxbVYUs92XkMTWXsritcRxUmk">',
})
export class MapComponent {}
