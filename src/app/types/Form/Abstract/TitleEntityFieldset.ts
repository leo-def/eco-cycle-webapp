import * as Yup from 'yup';
import { entityFieldsetInitialValues, EntityFieldsetSchema, EntityFieldset } from './EntityFieldset';

export interface TitleEntityFieldset extends EntityFieldset {
  title: string | null;
}

export const TitleEntityFieldsetSchema = EntityFieldsetSchema.shape({
  title: Yup.string().nullable(false)
});

export const titleEntityFieldsetInitialValues: TitleEntityFieldset = {
  ...entityFieldsetInitialValues,
  title: ''
};
