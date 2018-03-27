import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StationService {

  constructor(private http: HttpClient) { }

  getStationsAll() {
    return this.http.get('assets/mock/stations.json').toPromise();
  }
}
