import { FetchState } from '../../../../types/Crud/FetchState';
import { FetchReducer } from '../../../Crud/Fetch';

export class MeasurementUnitFetchState extends FetchState {
  constructor() {
    super('ADMIN_MEASUREMENT_UNIT');
  }
}

export const measurementUnitFetchState = new MeasurementUnitFetchState();
export const fetchReducer = FetchReducer.getReduce(measurementUnitFetchState);