import { Component, OnInit } from '@angular/core';
import { StationService } from '../../services/station.service';
import { ChargingStation, Position } from '../../models/charging-station';

@Component({
  selector: 'elbil-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  stations: Array<ChargingStation> = new Array<ChargingStation>();

  constructor(private stationService: StationService) { }

  ngOnInit() {
    this.stationService.getStationsAll()
      .then( result => {
        this.stations.length = 0;
        result['chargerstations'].forEach(s => {
          s['csmd'].Position = Position.convert(s['csmd'].Position);
          this.stations.push(s as ChargingStation);
        });
        console.log('Station:', this.stations[900]);
      })
      .catch(e => console.error('Could not load stations', e));
  }

}
