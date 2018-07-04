import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'elbil-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
    navigator.geolocation.watchPosition(response => {
      console.log('success response', response);
      this.userLocation = response as Position;
    }, error => {
        console.error('error response', error);
      });
  }

}
