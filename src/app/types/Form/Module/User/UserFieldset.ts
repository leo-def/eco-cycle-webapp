import * as Yup from 'yup';
import { UserTypeEnum } from '../../../../enums/Entity/UserType.enum';
import { entityFieldsetInitialValues, EntityFieldsetSchema, EntityFieldset } from '../../Abstract/EntityFieldset';
import { ProfileFieldset, profileFieldsetInitialValues, ProfileFieldsetSchema } from '../ProfileFieldset';

export interface UserFieldset extends EntityFieldset {
  username: string;
  password: string;
  type: UserTypeEnum;
  profile: ProfileFieldset;
}

export const UserFieldsetSchema = EntityFieldsetSchema.shape({
  username: Yup.string().nullable(true),
  password: Yup.string().nullable(true),
  type: Yup.string().oneOf(Object.values(UserTypeEnum) as Array<string>).nullable(true),
  profile: ProfileFieldsetSchema.nullable(true)
});

export const userFieldsetInitialValues: UserFieldset = {
  ...entityFieldsetInitialValues,
  username: '',
  password: '',
  type: UserTypeEnum.client,
  profile: profileFieldsetInitialValues
};

export const adminFieldsetInitialValues: UserFieldset = {
  ...entityFieldsetInitialValues,
  username: '',
  password: '',
  type: UserTypeEnum.admin,
  profile: profileFieldsetInitialValues
};
