import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChargingStation } from '../models/charging-station.model';
import { StationPosition } from '../models/station-position.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient, private db: DatabaseService) { }

  getStationsAll(): Promise<ChargingStation[]> {
    return this.http.get('assets/mock/stations.json').toPromise()
      .then(stations => {
        stations['chargerstations'].forEach(s => {
          s['csmd'].Position = StationPosition.convert(s['csmd'].Position);
        });
        this.db.addStations(stations['chargerstations'] as ChargingStation[]);
        return stations['chargerstations'] as ChargingStation[];
      })
      .catch(error =>
        console.error('', error)) as Promise<ChargingStation[]>;
  }

  getUpdatedStations() { }
}
