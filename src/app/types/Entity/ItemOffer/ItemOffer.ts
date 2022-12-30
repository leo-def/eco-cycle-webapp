import { ItemOfferTypeEnum } from '../../../enums/Entity/ItemOfferType.enum';
import { Entity } from '../Abstract/Entity';
import { Group } from '../Group/Group';
import { Place } from '../Place/Place';
import { ProductItem } from '../ProductItem/ProductItem';

export interface ItemOffer extends Entity {
  itemId?: number;
  item?: ProductItem;
  placeId?: number;
  place?: Place;
  groupId?: number;
  group?: Group;
  type?: ItemOfferTypeEnum;
}