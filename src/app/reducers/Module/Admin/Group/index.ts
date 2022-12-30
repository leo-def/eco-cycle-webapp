import { combineReducers } from "redux";
import { CrudReducerState } from "../../../Crud/Crud";
import { FetchReducerState } from "../../../Crud/Fetch";
import { crudReducer } from "./Crud";
import { fetchReducer } from "./Fetch";

export interface GroupState {
  crud: CrudReducerState;
  fetch: FetchReducerState;
}

export const GroupReducer = combineReducers({
  crud: crudReducer,
  fetch: fetchReducer
});

export default GroupReducer;
