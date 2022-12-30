import * as Yup from 'yup';
import { UserTypeEnum } from '../../../../enums/Entity/UserType.enum';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../../Abstract/EntityFieldset';
import { ProfileFieldset, profileFieldsetInitialValues, ProfileFieldsetSchema } from "../ProfileFieldset";

export interface OwnerFieldset extends EntityFieldset {
  username: string;
  password: string;
  confirmPassword: string | null;
  type: UserTypeEnum;
  profile: ProfileFieldset;
}

export const OwnerFieldsetSchema = EntityFieldsetSchema.shape({
  username: Yup.string().nullable(true),
  password: Yup.string().nullable(true),
  confirmPassword: 
    Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').nullable(false).required(),
  type: Yup.string().oneOf(Object.values(UserTypeEnum) as Array<string>).nullable(true),
  profile: ProfileFieldsetSchema.nullable(true)
  
});

export const mainCollaboratorFieldsetInitialValues: OwnerFieldset = {
  ...entityFieldsetInitialValues,
  username: '',
  password: '',
  confirmPassword: '',
  type: UserTypeEnum.client,
  profile: profileFieldsetInitialValues
};
