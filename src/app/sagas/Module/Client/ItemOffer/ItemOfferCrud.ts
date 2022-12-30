import service from '../../../../services/Module/Client/ItemOffer';
import { itemOfferCrudState } from '../../../../reducers/Module/Client/ItemOffer/Crud';
import { CrudSaga } from '../../../Crud';

export const crudSaga = new CrudSaga(
  itemOfferCrudState,
  service
).getSagasFunction();

export default crudSaga;
