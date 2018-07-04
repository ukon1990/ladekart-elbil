import { StationPosition } from './station-position.model';

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
  Position: StationPosition;
  Station_status: number;
  Street: string;
  Updated: Date;
  User_comment: string;
  Zipcode: string;
}
