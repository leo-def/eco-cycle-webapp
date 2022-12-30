import { CrudState } from '../../../../types/Crud/CrudState';
import { CrudReducer } from '../../../Crud/Crud';

export class PlaceCrudState extends CrudState {
  constructor() {
    super('GROUP_PLACE');
  }
}

export const placeCrudState = new PlaceCrudState();
export const crudReducer = CrudReducer.getReduce(placeCrudState);