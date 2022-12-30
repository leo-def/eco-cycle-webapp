import service from '../../../../services/Module/Admin/Group';
import { groupCrudState } from '../../../../reducers/Module/Admin/Group/Crud';
import { CrudSaga } from '../../../Crud';

export const crudSaga = new CrudSaga(
  groupCrudState,
  service
).getSagasFunction();

export default crudSaga;
