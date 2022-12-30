import service from '../../../../services/Module/Admin/MeasurementUnit';
import { measurementUnitCrudState } from '../../../../reducers/Module/Admin/MeasurementUnit/Crud';
import { CrudSaga } from '../../../Crud';

export const crudSaga = new CrudSaga(
  measurementUnitCrudState,
  service
).getSagasFunction();

export default crudSaga;
