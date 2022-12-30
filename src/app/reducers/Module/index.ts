import { combineReducers } from 'redux';
import adminReducer, { AdminState } from './Admin';
import clientReducer, { ClientState } from './Client';
import groupReducer, { GroupState } from './Group';

export interface ModuleState {
    admin: AdminState;
    client: ClientState;
    group: GroupState;
}

export const moduleReducer = combineReducers({
    admin: adminReducer,
    client: clientReducer,
    group: groupReducer
});

export default moduleReducer;
