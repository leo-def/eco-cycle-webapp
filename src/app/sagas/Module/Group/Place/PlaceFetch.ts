import service from '../../../../services/Module/Group/Place';
import { placeFetchState } from '../../../../reducers/Module/Group/Place/Fetch';
import { FetchSaga } from '../../../Crud';

export const fetchSaga = new FetchSaga(
  placeFetchState,
  service
).getSagasFunction();

export default fetchSaga;
