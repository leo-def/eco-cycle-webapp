import * as Yup from 'yup';
import { ItemOfferTypeEnum } from '../../../enums/Entity/ItemOfferType.enum';
import { entityFieldsetInitialValues, EntityFieldsetSchema, EntityFieldset } from '../Abstract/EntityFieldset';
import { productItemFieldsetInitialValues, ProductItemFieldsetSchema, ProductItemFieldset } from './ProductItemFieldset';


export interface ItemOfferFieldset extends EntityFieldset {
  item: ProductItemFieldset | null;
  placeId: number | null;
  type: ItemOfferTypeEnum | null;
  groupId: number | null;
}

export const ItemOfferFieldsetSchema = EntityFieldsetSchema.shape({
  item: ProductItemFieldsetSchema.nullable(true),
  placeId: Yup.number().nullable(true),
  type: Yup.string().oneOf(Object.values(ItemOfferTypeEnum) as Array<string>).nullable(true),
  groupId: Yup.number().nullable(true)
});

export const itemOfferFieldsetInitialValues: ItemOfferFieldset = {
  ...entityFieldsetInitialValues,
  item: productItemFieldsetInitialValues,
  placeId: null,
  type: null,
  groupId: null
};