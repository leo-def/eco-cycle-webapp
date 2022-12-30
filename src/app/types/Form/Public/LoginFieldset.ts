import * as Yup from 'yup';

export interface LoginFieldset {
  username: string;
  password: string;
}

export const LoginFieldsetSchema = Yup.object().shape({
  username: Yup.string().nullable(true),
  password: Yup.string().nullable(true)
});

export const loginFieldsetInitialValues: LoginFieldset = {
  username: '',
  password: ''
};