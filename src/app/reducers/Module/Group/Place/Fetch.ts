import { FetchState } from '../../../../types/Crud/FetchState';
import { FetchReducer } from '../../../Crud/Fetch';

export class PlaceFetchState extends FetchState {
  constructor() {
    super('GROUP_PLACE');
  }
}

export const placeFetchState = new PlaceFetchState();
export const fetchReducer = FetchReducer.getReduce(placeFetchState);