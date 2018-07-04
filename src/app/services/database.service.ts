import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { ChargingStation } from '../models/charging-station.model';
/**
 * A Class for handeling the indexedDB
 */

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private db: Dexie;

  readonly STATION_TABLE_COLUMNS = 'csmd,attr';

  constructor() {
    this.db = new Dexie('stations');
    this.setDbVersions();
    this.db.open()
      .then(() => {
        console.log('stations successfully started');
      }).catch(error => {
        console.log('Unable to start indexedDB', error);
      });
  }

  addStations(stations: ChargingStation[]): void {
    this.db.table('stations').clear();
    this.db.table('stations')
      .bulkPut(stations)
      .then(r => console.log('Successfully added stations to local DB'))
      .catch(e => console.error('Could not add stations to local DB', e));
  }

  clearDB(): void {
    this.db.delete();
  }

  setDbVersions(): void {
    this.db.version(1).stores({
      stations: this.STATION_TABLE_COLUMNS
    });
  }
}
