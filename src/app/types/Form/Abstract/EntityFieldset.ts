import * as Yup from 'yup';

export interface EntityFieldset {
  id?: number;
}

export const EntityFieldsetSchema = Yup.object().shape({
  id: Yup.number().nullable(true)
});

export const entityFieldsetInitialValues: EntityFieldset = {
};
