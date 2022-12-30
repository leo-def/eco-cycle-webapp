import { CrudState } from '../../../../types/Crud/CrudState';
import { CrudReducer } from '../../../Crud/Crud';

export class PhysicalQuantityCrudState extends CrudState {
  constructor() {
    super('ADMIN_PHYSICAL_QUANTITY');
  }
}

export const physicalQuantityCrudState = new PhysicalQuantityCrudState();
export const crudReducer = CrudReducer.getReduce(physicalQuantityCrudState);