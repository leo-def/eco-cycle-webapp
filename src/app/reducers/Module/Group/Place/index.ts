import { combineReducers } from "redux";
import { FetchReducerState } from "../../../Crud";
import { CrudReducerState } from "../../../Crud/Crud";
import { crudReducer } from "./Crud";
import { fetchReducer } from "./Fetch";

export interface PlaceState {
  crud: CrudReducerState;
  fetch: FetchReducerState;
}

export const placeReducer = combineReducers({
  crud: crudReducer,
  fetch: fetchReducer
})

export default placeReducer;
