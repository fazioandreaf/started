import { Component, Input } from '@angular/core';
// per far diventare un file un component di angular bisogna decorarlo
@Component({
  // nome dell component
  selector: 'gmap',
  template: ` <img
    src="https://maps.googleapis.com/maps/api/staticmap?center={{ lat }},{{
      lng
    }}&zoom=4&size=400x100&key="
  />`,
  // inputs: [lat, lng],
})
export class MapComponent {
  // decoratore
  @Input() lat: number | undefined;
  @Input() lng: number | undefined;
}
