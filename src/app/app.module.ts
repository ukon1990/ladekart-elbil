import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { MenuComponent } from './components/menu/menu.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { googleMapsAPIKey } from './keys';
import { DatabaseService } from './services/database.service';
import { StationService } from './services/station.service';
import { MaterialModule } from './material.module';

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
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: googleMapsAPIKey,
      libraries: ['places']
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule,
    MaterialModule
  ],
  providers: [
    DatabaseService,
    StationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
