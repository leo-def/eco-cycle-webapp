import service from '../../../../services/Module/Group/Vehicle';
import { vehicleCrudState } from '../../../../reducers/Module/Group/Vehicle/Crud';
import { CrudSaga } from '../../../Crud';

export const crudSaga = new CrudSaga(
  vehicleCrudState,
  service
).getSagasFunction();

export default crudSaga;
