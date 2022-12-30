import service from '../../../../services/Module/Admin/PhysicalQuantity';
import { physicalQuantityCrudState } from '../../../../reducers/Module/Admin/PhysicalQuantity/Crud';
import { CrudSaga } from '../../../Crud';

export const crudSaga = new CrudSaga(
  physicalQuantityCrudState,
  service
).getSagasFunction();

export default crudSaga;
