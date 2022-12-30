import { CrudState } from '../../../../types/Crud/CrudState';
import { CrudReducer } from '../../../Crud/Crud';

export class ProductCrudState extends CrudState {
  constructor() {
    super('ADMIN_PRODUCT');
  }
}

export const productCrudState = new ProductCrudState();
export const crudReducer = CrudReducer.getReduce(productCrudState);