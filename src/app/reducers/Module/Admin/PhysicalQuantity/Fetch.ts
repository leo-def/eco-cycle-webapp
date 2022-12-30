import { FetchState } from '../../../../types/Crud/FetchState';
import { FetchReducer } from '../../../Crud/Fetch';

export class PhysicalQuantityFetchState extends FetchState {
  constructor() {
    super('ADMIN_PHYSICAL_QUANTITY');
  }
}

export const physicalQuantityFetchState = new PhysicalQuantityFetchState();
export const fetchReducer = FetchReducer.getReduce(physicalQuantityFetchState);