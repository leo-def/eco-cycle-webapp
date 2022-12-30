import { CrudState } from '../../../../types/Crud/CrudState';
import { CrudReducer } from '../../../Crud/Crud';

export class GroupCrudState extends CrudState {
  constructor() {
      super('ADMIN_GROUP');
  }
}

export const groupCrudState = new GroupCrudState();
export const crudReducer = CrudReducer.getReduce(groupCrudState);