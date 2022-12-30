import { combineReducers } from "redux";
import { CrudReducerState } from "../../../Crud/Crud";
import { FetchReducerState } from "../../../Crud/Fetch";
import { crudReducer } from "./Crud";
import { fetchReducer } from "./Fetch";

export interface PhysicalQuantityState {
  crud: CrudReducerState;
  fetch: FetchReducerState;
}

export const physicalQuantityReducer = combineReducers({
  crud: crudReducer,
  fetch: fetchReducer
});

export default physicalQuantityReducer;
