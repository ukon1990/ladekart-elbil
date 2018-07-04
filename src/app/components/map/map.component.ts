import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { GoogleMap, LatLng } from '@agm/core/services/google-maps-types';
import { StationService } from '../../services/station.service';
import { ChargingStation } from '../../models/charging-station.model';
import { AgmMap, MapsAPILoader } from '@agm/core';

declare let google: GoogleMap;
@Component({
  selector: 'elbil-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map') googleMap: AgmMap;
  mapAPI: GoogleMap;

  userLocation: Position = {
    coords: {
      latitude: 51.678418,
      longitude: 7.809007,
      accuracy: 781540,
      altitude: 0,
      ​​altitudeAccuracy: 0,
      heading: undefined,
      speed: undefined
    },
    timestamp: undefined
  };
  stations: ChargingStation[] = [];
  visibleStations: ChargingStation[] = [];

  constructor(private service: StationService, private kartApiLaster: MapsAPILoader) {
    this.kartApiLaster.load()
      .then(() => {
        this.mapAPI = (google['maps']) as GoogleMap;
        console.log('Map', this.mapAPI);
      })
.catch(e => console.error('Kunne ikke laste inn kart', e));
  }

  ngOnInit() {
    navigator.geolocation.watchPosition(response => {
      console.log('success response', response);
      this.userLocation = response as Position;
    }, error => {
      console.error('error response', error);
    });

    // this.googleMap.triggerResize(); -> For later?

    this.service.getStationsAll()
      .then(stations => this.stations = stations);
  }

  ngAfterViewInit(): void {
    console.log();
  }

  boundsChange(change): void {
    console.log('Change', change);
    // this.visibleStations = this.stations;
    this.stations.forEach(s => {
      if (this.mapAPI.getBounds().contains(s.csmd.Position as any)) {
        this.visibleStations.push(s);
      }
    });
  }
}
