import service from '../../../../services/Module/Admin/Group';
import { groupFetchState } from '../../../../reducers/Module/Admin/Group/Fetch';
import { FetchSaga } from '../../../Crud';

export const fetchSaga = new FetchSaga(
  groupFetchState,
  service
).getSagasFunction();

export default fetchSaga;
