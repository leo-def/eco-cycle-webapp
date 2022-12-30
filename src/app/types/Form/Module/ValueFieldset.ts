import * as Yup from 'yup';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../Abstract/EntityFieldset';

export interface ValueFieldset extends EntityFieldset {
  measurementUnitId: number | null;
  value: number | null;
}

export const ValueFieldsetSchema = EntityFieldsetSchema.shape({
  measurementUnitId: Yup.number().nullable(true),
  value: Yup.number().nullable(true),
});

export const valueFieldsetInitialValues: ValueFieldset = {
  ...entityFieldsetInitialValues,
  measurementUnitId: null,
  value: null
};