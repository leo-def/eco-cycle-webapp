import { CrudState } from '../../../../types/Crud/CrudState';
import { CrudReducer } from '../../../Crud/Crud';

export class ItemOfferCrudState extends CrudState {
  constructor() {
    super('GROUP_ITEM_OFFER');
  }
}
export const itemOfferCrudState = new ItemOfferCrudState();
export const crudReducer = CrudReducer.getReduce(itemOfferCrudState);