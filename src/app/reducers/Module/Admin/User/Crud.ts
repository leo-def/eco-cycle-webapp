import { CrudState } from '../../../../types/Crud/CrudState';
import { CrudReducer } from '../../../Crud/Crud';

export class UserCrudState extends CrudState {
  constructor() {
    super('ADMIN_USER');
  }
}

export const userCrudState = new UserCrudState();
export const crudReducer = CrudReducer.getReduce(userCrudState);