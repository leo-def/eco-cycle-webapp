import * as Yup from 'yup';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../Abstract/EntityFieldset';
import { MediaFieldset, MediaFieldsetSchema } from './MediaFieldset';
import { ValueFieldset, ValueFieldsetSchema, valueFieldsetInitialValues } from './ValueFieldset';

export interface ProductItemFieldset extends EntityFieldset {
  productId: string | null;
  value: ValueFieldset | null;
  media: Array<MediaFieldset>;
  financialValue: ValueFieldset;
}

export const ProductItemFieldsetSchema = EntityFieldsetSchema.shape({
  productId: Yup.string().nullable(true),
  value: ValueFieldsetSchema.nullable(true),
  media: Yup.array().of(MediaFieldsetSchema).nullable(true),
  financialValue: ValueFieldsetSchema.nullable(true)
});

export const productItemFieldsetInitialValues: ProductItemFieldset = {
  ...entityFieldsetInitialValues,
  productId: null,
  value: valueFieldsetInitialValues,
  media: [],
  financialValue: valueFieldsetInitialValues
};
