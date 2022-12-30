import service from '../../../../services/Module/Group/Collaborator';
import { collaboratorCrudState } from '../../../../reducers/Module/Group/Collaborator/Crud';
import { CrudSaga } from '../../../Crud';

export const crudSaga = new CrudSaga(
  collaboratorCrudState,
  service
).getSagasFunction();

export default crudSaga;
