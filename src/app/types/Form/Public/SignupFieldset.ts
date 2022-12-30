import * as Yup from 'yup';
import { ActivityTypeEnum } from '../../../enums/Entity/ActivityType.enum';
import { OwnerFieldset, mainCollaboratorFieldsetInitialValues, OwnerFieldsetSchema } from "../Module/Collaborator/OwnerFieldset";
import { SignupGroupFieldset, signupGroupFieldsetInitialValues, SignupGroupFieldsetSchema } from './SignupGroupFieldset';

export interface SignupFieldset {
  /* Step 1 - Tipo de atividade */
  type?: ActivityTypeEnum;
  /* Step 2 - Perfil principal para gerenciar a empresa */
  collaborator: OwnerFieldset;
  /* Step 3- Informar se usar perfil empresa */
  company: SignupGroupFieldset
}

export const SignupFieldsetSchema = Yup.object().shape({
  type: Yup.string().oneOf(Object.values(ActivityTypeEnum) as Array<string>).required(),
  collaborator: OwnerFieldsetSchema.nullable(true),
  company: SignupGroupFieldsetSchema.nullable(true),
});

export const signupGroupInitialValues: SignupFieldset = {
  type: undefined,
  collaborator: mainCollaboratorFieldsetInitialValues,
  company: signupGroupFieldsetInitialValues
};