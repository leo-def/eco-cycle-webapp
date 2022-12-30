import service from '../../../../services/Module/Admin/MeasurementUnit';
import { measurementUnitFetchState } from '../../../../reducers/Module/Admin/MeasurementUnit/Fetch';
import { FetchSaga } from '../../../Crud';

export const fetchSaga = new FetchSaga(
  measurementUnitFetchState,
  service
).getSagasFunction();

export default fetchSaga;
