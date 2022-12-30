import * as Yup from 'yup';
import { TitleEntityFieldset, TitleEntityFieldsetSchema, titleEntityFieldsetInitialValues } from '../Abstract/TitleEntityFieldset';
import { MediaFieldset, MediaFieldsetSchema } from './MediaFieldset';

export interface ProductFieldset extends TitleEntityFieldset {
  media: Array<MediaFieldset>;
}

export const ProductFieldsetSchema = TitleEntityFieldsetSchema.shape({
  media: Yup.array().of(MediaFieldsetSchema).nullable(true)
});

export const productFieldsetInitialValues: ProductFieldset = {
  ...titleEntityFieldsetInitialValues,
  media: []
};