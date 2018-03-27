import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { MenuComponent } from './components/menu/menu.component';
import { StationService } from './services/station.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALfY-ZkiaguxTXrScbtXNOpaPlfkXiBvo'
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule
  ],
  providers: [StationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
