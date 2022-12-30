import * as Yup from 'yup';
import { UserTypeEnum } from '../../../../enums/Entity/UserType.enum';
import { entityFieldsetInitialValues, EntityFieldsetSchema, EntityFieldset } from '../../Abstract/EntityFieldset';
import { ProfileFieldset, profileFieldsetInitialValues, ProfileFieldsetSchema } from '../ProfileFieldset';

export interface CollaboratorUserFieldset extends EntityFieldset {
  username: string;
  password: string;
  type: UserTypeEnum;
  profile: ProfileFieldset;
}

export const CollaboratorUserFieldsetSchema = EntityFieldsetSchema.shape({
  username: Yup.string().nullable(true),
  password: Yup.string().nullable(true),
  type: Yup.string().oneOf(Object.values(UserTypeEnum) as Array<string>).nullable(true),
  profile: ProfileFieldsetSchema.nullable(true),
  
});

export const collaboratorUserFieldsetInitialValues: CollaboratorUserFieldset = {
  ...entityFieldsetInitialValues,
  username: '',
  password: '',
  type: UserTypeEnum.client,
  profile: profileFieldsetInitialValues
};

