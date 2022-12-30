import { CrudState } from '../../../../types/Crud/CrudState';
import { CrudReducer } from '../../../Crud/Crud';

export class CollaboratorCrudState extends CrudState {
  constructor() {
    super('GROUP_COLLABORATOR');
  }
}

export const collaboratorCrudState = new CollaboratorCrudState();
export const crudReducer = CrudReducer.getReduce(collaboratorCrudState);