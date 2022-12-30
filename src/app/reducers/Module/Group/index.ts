import { combineReducers } from 'redux';
import setGroupReducer, { SetGroupState } from './Set';
import collaboratorReducer, { CollaboratorState } from './Collaborator';
import itemOfferReducer, { ItemOfferState } from './ItemOffer';
import placeReducer, { PlaceState } from './Place';
import vehicleReducer, { VehicleState } from './Vehicle';

export interface GroupState {
    set: SetGroupState;
    collaborator: CollaboratorState;
    itemOffer: ItemOfferState;
    place: PlaceState;
    vehicle: VehicleState;
}

export const groupReducer = combineReducers({
    set: setGroupReducer,
    collaborator: collaboratorReducer,
    itemOffer: itemOfferReducer,
    place: placeReducer,
    vehicle: vehicleReducer
});

export default groupReducer;
