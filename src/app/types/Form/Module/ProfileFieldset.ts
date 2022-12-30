import * as Yup from 'yup';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../Abstract/EntityFieldset';

export interface ProfileFieldset extends EntityFieldset {
  name: string;
}

export const ProfileFieldsetSchema = EntityFieldsetSchema.shape({
  name: Yup.string().nullable(true)
});

export const profileFieldsetInitialValues: ProfileFieldset = {
  ...entityFieldsetInitialValues,
  name: '',
};
