import * as Yup from 'yup';
import { titleEntityFieldsetInitialValues, TitleEntityFieldsetSchema, TitleEntityFieldset } from '../Abstract/TitleEntityFieldset';
import { AddressFieldset, addressFieldsetInitialValues, AddressFieldsetSchema } from './AddressFieldset';
import { MediaFieldset, MediaFieldsetSchema } from './MediaFieldset';

export interface PlaceFieldset extends TitleEntityFieldset {
  address: AddressFieldset;
  media: Array<MediaFieldset>;
  type: string;
}

export const PlaceFieldsetSchema = TitleEntityFieldsetSchema.shape({
  address: AddressFieldsetSchema.nullable(true),
  media: Yup.array().of(MediaFieldsetSchema).nullable(true),
  type: Yup.string().nullable(true)
});

export const placeFieldsetInitialValues: PlaceFieldset = {
  ...titleEntityFieldsetInitialValues,
  address: addressFieldsetInitialValues,
  media: [],
  type: ''
};