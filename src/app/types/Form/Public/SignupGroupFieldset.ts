import * as Yup from 'yup';
import { ProfileFieldset, profileFieldsetInitialValues, ProfileFieldsetSchema } from "../Module/ProfileFieldset";

export interface SignupGroupFieldset {
  createGroupProfile: boolean;
  profile: ProfileFieldset;
}

export const SignupGroupFieldsetSchema = Yup.object().shape({
  createGroupProfile: Yup.boolean(),
  profile: ProfileFieldsetSchema.nullable(true),
});

export const signupGroupFieldsetInitialValues: SignupGroupFieldset = {
  createGroupProfile: false,
  profile: profileFieldsetInitialValues
};