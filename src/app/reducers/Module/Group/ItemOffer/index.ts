import { combineReducers } from "redux";
import { CrudReducerState } from "../../../Crud/Crud";
import { crudReducer } from "./Crud";

export interface ItemOfferState {
  crud: CrudReducerState;
}

export const itemOfferReducer = combineReducers({
  crud: crudReducer
});

export default itemOfferReducer;
