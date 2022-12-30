// import * as Yup from 'yup';

import { TitleEntityFieldset, TitleEntityFieldsetSchema, titleEntityFieldsetInitialValues } from '../../Abstract/TitleEntityFieldset';

export type  PhysicalQuantityFieldset =  TitleEntityFieldset;

export const PhysicalQuantityFieldsetSchema = TitleEntityFieldsetSchema.shape({
});

export const physicalQuantityFieldsetInitialValues: PhysicalQuantityFieldset = {
  ...titleEntityFieldsetInitialValues,
};