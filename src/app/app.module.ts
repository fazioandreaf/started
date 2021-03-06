import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/gmap';
import { TabComponent } from './components/tabbar';

@NgModule({
  // elenco dei moduli usabili nell app.component
  declarations: [AppComponent, MapComponent, TabComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
