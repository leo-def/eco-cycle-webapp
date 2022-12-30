import { combineReducers } from "redux";
import { CrudReducerState } from "../../../Crud/Crud";
import { FetchReducerState } from "../../../Crud/Fetch";
import { crudReducer } from "./Crud";
import { fetchReducer } from "./Fetch";

export interface ProductState {
  crud: CrudReducerState;
  fetch: FetchReducerState;
}

export const productReducer = combineReducers({
  crud: crudReducer,
  fetch: fetchReducer
});

export default productReducer;
