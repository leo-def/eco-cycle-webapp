import * as Yup from 'yup';
import { TitleEntityFieldset, TitleEntityFieldsetSchema, titleEntityFieldsetInitialValues } from '../../Abstract/TitleEntityFieldset';
import { PhysicalQuantityFieldset, PhysicalQuantityFieldsetSchema, physicalQuantityFieldsetInitialValues } from './PhysicalQuantityFieldset';

export interface MeasurementUnitFieldset extends TitleEntityFieldset {
  value: number | null;
  physicalQuantityId?: string;
  physicalQuantity: PhysicalQuantityFieldset;
  symbol?: string;
}

export const MeasurementUnitFieldsetSchema = TitleEntityFieldsetSchema.shape({
  value: Yup.number().nullable(true),
  physicalQuantityId: Yup.string().nullable(true),
  physicalQuantity: PhysicalQuantityFieldsetSchema.nullable(true),
  symbol: Yup.string().nullable(true),
});

export const measurementUnitFieldsetInitialValues: MeasurementUnitFieldset = {
  ...titleEntityFieldsetInitialValues,
  value: null,
  physicalQuantity: physicalQuantityFieldsetInitialValues,
};