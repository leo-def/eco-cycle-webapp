import { combineReducers } from "redux";
import { CrudReducerState } from "../../../Crud/Crud";
import { crudReducer } from "./Crud";

export interface CollaboratorState {
  crud: CrudReducerState;
}

export const collaboratorReducer = combineReducers({
  crud: crudReducer
});

export default collaboratorReducer;
