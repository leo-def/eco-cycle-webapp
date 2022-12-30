import { FetchState } from '../../../../types/Crud/FetchState';
import { FetchReducer } from '../../../Crud/Fetch';

export class GroupFetchState extends FetchState {
  constructor() {
      super('ADMIN_GROUP_FETCH');
  }
}

export const groupFetchState = new GroupFetchState();
export const fetchReducer = FetchReducer.getReduce(groupFetchState);