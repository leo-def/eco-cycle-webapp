import { combineReducers } from "redux";
import { CrudReducerState } from "../../../Crud/Crud";
import { crudReducer } from "./Crud";

export interface UserState {
  crud: CrudReducerState;
}

export const userReducer = combineReducers({
  crud: crudReducer
});

export default userReducer;
