import service from '../../../../services/Module/Admin/PhysicalQuantity';
import { physicalQuantityFetchState } from '../../../../reducers/Module/Admin/PhysicalQuantity/Fetch';
import { FetchSaga } from '../../../Crud';

export const fetchSaga = new FetchSaga(
  physicalQuantityFetchState,
  service
).getSagasFunction();

export default fetchSaga;
