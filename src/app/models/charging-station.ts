export class ChargingStation {
  csmd: ChargingStationMetaData;
  attr: StationAttributes;
}

export class StationAttributes {
  st: StationStatus;
  conn: Connector;
}

class StationStatus {

}

class Connector {

}

export class ChargingStationMetaData {
  id: number;
  name: string;
  Available_charging_points: number;
  City: string;
  Contact_info: string;
  County: string;
  County_ID: string;
  Created: Date;
  Description_of_location: string;
  House_number: string;
  Image: string;
  International_id: string;
  Land_code: string;
  Municipality: string;
  Municipality_ID: string;
  Number_charging_points: number;
  Owned_by: string;
  Position: Position;
  Station_status: number;
  Street: string;
  Updated: Date;
  User_comment: string;
  Zipcode: string;
}

export class Position {
  // "(60.04256,10.88209)"
  lat: number;
  lng: number;

  constructor(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
  }

  public static convert(posString: string): Position {
    const p = posString.substring(1, posString.length - 1).split(',');
    return new Position(parseFloat(p[0]), parseFloat(p[1]));
  }
}
