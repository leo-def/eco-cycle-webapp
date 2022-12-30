import * as Yup from 'yup';
import { CollaboratorRoleEnum } from '../../../../enums/Entity/CollaboratorRole.enum';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../../Abstract/EntityFieldset';
import { CollaboratorUserFieldset, collaboratorUserFieldsetInitialValues, CollaboratorUserFieldsetSchema } from "../User/CollaboratorUserFieldset";

export interface CollaboratorFieldset extends EntityFieldset {
  user: CollaboratorUserFieldset;
  role: CollaboratorRoleEnum;
}

export const CollaboratorFieldsetSchema = EntityFieldsetSchema.shape({
  user: CollaboratorUserFieldsetSchema.nullable(true),
  role: Yup.string().oneOf(Object.values(CollaboratorRoleEnum) as Array<string>).nullable(true),
});

export const collaboratorFieldsetInitialValues: CollaboratorFieldset = {
  ...entityFieldsetInitialValues,
  user: collaboratorUserFieldsetInitialValues,
  role: CollaboratorRoleEnum.employee
};

export const ownerCollaboratorFieldsetInitialValues: CollaboratorFieldset = {
  ...entityFieldsetInitialValues,
  user: collaboratorUserFieldsetInitialValues,
  role: CollaboratorRoleEnum.owner
};
