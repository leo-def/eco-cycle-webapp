import service from '../../../../services/Module/Group/ItemOffer';
import { itemOfferCrudState } from '../../../../reducers/Module/Group/ItemOffer/Crud';
import { CrudSaga } from '../../../Crud';

export const crudSaga = new CrudSaga(
  itemOfferCrudState,
  service
).getSagasFunction();

export default crudSaga;
