import * as Yup from 'yup';
import { TitleEntityFieldset, TitleEntityFieldsetSchema, titleEntityFieldsetInitialValues } from '../Abstract/TitleEntityFieldset';
import { MediaFieldset, MediaFieldsetSchema } from './MediaFieldset';

export interface VehicleFieldset extends TitleEntityFieldset {
  plate: string;
  media: Array<MediaFieldset>;
}

export const VehicleFieldsetSchema = TitleEntityFieldsetSchema.shape({
  plate: Yup.string().nullable(true),
  media: Yup.array().of(MediaFieldsetSchema).nullable(true)
});

export const vehicleFieldsetInitialValues: VehicleFieldset = {
  ...titleEntityFieldsetInitialValues,
  plate: '',
  media: []
};