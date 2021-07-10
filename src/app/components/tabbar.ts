import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() items: any;
  @Output() onTabClick: EventEmitter<any> = new EventEmitter();

  itemClickHandler(tab: any) {
    // console.loge(tab)
    this.onTabClick.emit(tab);
  }
}
