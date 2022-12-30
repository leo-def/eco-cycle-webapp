import service from '../../../../services/Module/Group/Place';
import { placeCrudState } from '../../../../reducers/Module/Group/Place/Crud';
import { CrudSaga } from '../../../Crud';

export const crudSaga = new CrudSaga(
  placeCrudState,
  service
).getSagasFunction();

export default crudSaga;
