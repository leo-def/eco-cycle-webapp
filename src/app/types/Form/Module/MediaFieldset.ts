import * as Yup from 'yup';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../Abstract/EntityFieldset';

export interface MediaFieldset extends EntityFieldset {
  type: string;
  mediaType: string;
  src: string;
}

export const MediaFieldsetSchema = EntityFieldsetSchema.shape({
  type: Yup.string().nullable(true),
  mediaType: Yup.string().nullable(true),
  src: Yup.string().nullable(true)
});

export const mediaFieldsetInitialValues: MediaFieldset = {
  ...entityFieldsetInitialValues,
  type: '',
  mediaType: '',
  src: ''
};