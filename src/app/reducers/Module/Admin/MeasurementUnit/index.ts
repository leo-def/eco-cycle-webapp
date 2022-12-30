import { combineReducers } from "redux";
import { CrudReducerState } from "../../../Crud/Crud";
import { FetchReducerState } from "../../../Crud/Fetch";
import { crudReducer } from "./Crud";
import { fetchReducer } from "./Fetch";

export interface MeasurementUnitState {
  crud: CrudReducerState;
  fetch: FetchReducerState;
}

export const measurementUnitReducer = combineReducers({
  crud: crudReducer,
  fetch: fetchReducer
});

export default measurementUnitReducer;
