import { FetchState } from '../../../../types/Crud/FetchState';
import { FetchReducer } from '../../../Crud/Fetch';

export class ProductFetchState extends FetchState {
  constructor() {
    super('ADMIN_PRODUCT');
  }
}

export const productFetchState = new ProductFetchState();
export const fetchReducer = FetchReducer.getReduce(productFetchState);