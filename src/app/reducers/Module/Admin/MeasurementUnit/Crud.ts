import { CrudState } from '../../../../types/Crud/CrudState';
import { CrudReducer } from '../../../Crud/Crud';

export class MeasurementUnitCrudState extends CrudState {
  constructor() {
    super('ADMIN_MEASUREMENT_UNIT');
  }
}

export const measurementUnitCrudState = new MeasurementUnitCrudState();
export const crudReducer = CrudReducer.getReduce(measurementUnitCrudState);