import * as Yup from 'yup';
import { EntityFieldset, EntityFieldsetSchema, entityFieldsetInitialValues } from '../Abstract/EntityFieldset';

export interface AddressFieldset extends EntityFieldset {
  cep: string;
  street: string;
  number: string;
  city: string;
  country: string;
  state: string;
  neighborhood: string;
  complement: string;
}

export const AddressFieldsetSchema = EntityFieldsetSchema.shape({
  cep: Yup.string().nullable(true),
  street: Yup.string().nullable(true),
  number: Yup.string().nullable(true),
  city: Yup.string().nullable(true),
  country: Yup.string().nullable(true),
  state: Yup.string().nullable(true),
  neighborhood: Yup.string().nullable(true),
  complement: Yup.string().nullable(true)
});

export const addressFieldsetInitialValues: AddressFieldset = {
  ...entityFieldsetInitialValues,
  cep: '',
  street: '',
  number: '',
  city: '',
  country: '',
  state: '',
  neighborhood: '',
  complement: ''
};