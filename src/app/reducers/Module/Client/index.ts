import { combineReducers } from 'redux';
import itemOfferReducer, { ItemOfferState } from './ItemOffer';

export interface ClientState {
    itemOffer: ItemOfferState;
}

export const clientReducer = combineReducers({
    itemOffer: itemOfferReducer
});

export default clientReducer;
