import { combineReducers } from "redux";
import { CrudReducerState } from "../../../Crud/Crud";
import { crudReducer } from "./Crud";

export interface VehicleState {
  crud: CrudReducerState;
}

export const vehicleReducer = combineReducers({
  crud: crudReducer
});

export default vehicleReducer;
