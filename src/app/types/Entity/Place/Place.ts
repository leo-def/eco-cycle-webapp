import { ActivityTypeEnum } from '../../../enums/Entity/ActivityType.enum';
import { Address } from '../Address/Address';
import { Media } from '../Media/Media';
import { TitleEntity } from '../Abstract/TitleEntity';

export const getTitle = (item?: Place) => {
  return item?.title;
}

export interface Place extends TitleEntity {
  addressId?: number;
  address?: Address;
  media?: Array<Media>;
  type?: ActivityTypeEnum;
  // no futuro usar para locais de coletas e não de oferecimento 
}