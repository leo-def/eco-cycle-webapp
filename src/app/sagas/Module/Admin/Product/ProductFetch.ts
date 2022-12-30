import service from '../../../../services/Module/Admin/Product';
import { productFetchState } from '../../../../reducers/Module/Admin/Product/Fetch';
import { FetchSaga } from '../../../Crud';

export const fetchSaga = new FetchSaga(
  productFetchState,
  service
).getSagasFunction();

export default fetchSaga;
