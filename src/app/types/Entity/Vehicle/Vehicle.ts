import { VehicleTypeEnum } from '../../../enums/Entity/VehicleType.enum';
import { Media } from '../Media/Media';
import { TitleEntity } from '../Abstract/TitleEntity';

export interface Vehicle extends TitleEntity {
  plate?: string;
  media?: Array<Media>;
  type?: VehicleTypeEnum;
}