import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './components/map/map.component';
import { MenuComponent } from './components/menu/menu.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { googleMapsAPIKey } from './keys';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: googleMapsAPIKey,
      libraries: ['places']
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
