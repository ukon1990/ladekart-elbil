import { StationAttributes } from './station-attributes.model';
import { ChargingStationMetaData } from './charging-station-metadata.model';

export class ChargingStation {
  csmd: ChargingStationMetaData;
  attr: StationAttributes;
}
