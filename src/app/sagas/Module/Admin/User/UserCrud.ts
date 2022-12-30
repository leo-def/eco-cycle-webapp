import service from '../../../../services/Module/Admin/User';
import { userCrudState } from '../../../../reducers/Module/Admin/User/Crud';
import { CrudSaga } from '../../../Crud';

export const crudSaga = new CrudSaga(
  userCrudState,
  service
).getSagasFunction();

export default crudSaga;
