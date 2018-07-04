export class StationPosition {
  // "(60.04256,10.88209)"
  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  public static convert(posString: string): StationPosition {
    const p = posString.substring(1, posString.length - 1).split(',');
    return new StationPosition(parseFloat(p[0]), parseFloat(p[1]));
  }
}
