import { combineReducers } from 'redux';
import groupReducer, { GroupState } from './Group';
import measurementUnitReducer, { MeasurementUnitState } from './MeasurementUnit';
import physicalQuantityReducer, { PhysicalQuantityState } from './PhysicalQuantity';
import productReducer, { ProductState } from './Product';
import userReducer, { UserState } from './User';

export interface AdminState {
    group: GroupState;
    product: ProductState;
    user: UserState;
    measurementUnit: MeasurementUnitState;
    physicalQuantity: PhysicalQuantityState;
}

export const adminReducer = combineReducers({
    group: groupReducer,
    product: productReducer,
    user: userReducer,
    measurementUnit: measurementUnitReducer,
    physicalQuantity: physicalQuantityReducer
});

export default adminReducer;
