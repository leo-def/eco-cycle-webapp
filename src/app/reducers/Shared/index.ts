import { combineReducers } from 'redux';
import addressReducer, { AddressState } from './Address';

export interface SharedState {
    address: AddressState;
}

export const sharedReducer = combineReducers({
    address: addressReducer
});

export default sharedReducer;

