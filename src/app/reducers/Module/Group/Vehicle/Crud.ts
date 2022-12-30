import { CrudState } from '../../../../types/Crud/CrudState';
import { CrudReducer } from '../../../Crud/Crud';

export class VehicleCrudState extends CrudState {
  constructor() {
    super('GROUP_VEHICLE');
  }
}

export const vehicleCrudState = new VehicleCrudState();
export const crudReducer = CrudReducer.getReduce(vehicleCrudState);