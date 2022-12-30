import { ActionTypeEnum } from '../../enums/Crud/ActionTypeEnum.enum';
import { CrudState } from '../../types/Crud/CrudState';
import { FetchResponse } from '../../types/Fetch/FetchResponse';

export interface CrudReducerState {
  fetchResponse?: FetchResponse;
  fetched: boolean;
  fetchPending: boolean;
  item: any;
  action: ActionTypeEnum;
  error: string | null;
  loading: boolean;
  fetchLoading: boolean;
  updateLoading: boolean;
  createLoading: boolean;
  deleteLoading: boolean;
  findLoading: boolean;
}

export const initialState: CrudReducerState = {
  item: null,
  action: ActionTypeEnum.LIST,
  loading: false,
  error: null,
  fetchLoading: false,
  updateLoading: false,
  createLoading: false,
  deleteLoading: false,
  findLoading: false,
  fetched: false,
  fetchPending: false
};

export class CrudReducer {
  config: CrudState = new CrudState()
  constructor(config: CrudState = new CrudState(), protected _defaultReduce: ((state: any, action: any) => any) | null = null) {
    this.config = config;
  }

  static getReduce(config?: CrudState) {
    const val = new CrudReducer(config);
    return val.getReduce();
  }

  getReduce() {
    return this.reduce.bind(this);
  }

  defaultReduce(state: any, action: any) {
    const defaultReduce = this._defaultReduce;
    return defaultReduce ? defaultReduce(state, action) : state;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  beforeReduce(state: any = initialState, _action: any) {
    return state;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterReduce(state: any = initialState, _action: any) {
    return state;
  }

  reduce(state: CrudReducerState = initialState, action: any) {
    return this.afterReduce(
      this.mainReduce(
        this.beforeReduce(state, action),
        action),
      action);
  }


  mainReduce(state: CrudReducerState = initialState, action: any): CrudReducerState {
    const config = this.config;
    const actionType = action.type;
    switch (actionType) {
      case config.CLEAR:
        return initialState;
      case config.SET_ITEM:
        return {
          ...state,
          item: action.payload.item
        };
      case config.SET_ACTION:
        return {
          ...state,
          action: (
            (
              !action.payload.action &&
              action.payload.action !== 0
            )
              ? state.action
              : action.payload.action),
          item: action.payload.item
        };
      // FETCH CREATE DELETE UPDATE
      case config.FIND:
      case config.FETCH:
      case config.CREATE:
      case config.DELETE:
      case config.UPDATE:
        return state; // saga actions
      // PENDING - FETCH CREATE DELETE UPDATE
      case config.FIND_PENDING:
        return {
          ...state,
          error: null,
          loading: true,
          findLoading: true
        };
      case config.FETCH_PENDING:
        return {
          ...state,
          error: null,
          loading: true,
          fetchLoading: true
        };
      case config.DELETE_PENDING:
        return {
          ...state,
          error: null,
          loading: true,
          deleteLoading: true
        };
      case config.CREATE_PENDING:
        return {
          ...state,
          error: null,
          loading: true,
          createLoading: true
        };
      case config.UPDATE_PENDING:
        return {
          ...state,
          error: null,
          loading: true,
          updateLoading: true
        };
      // SUCCESS - FETCH CREATE DELETE UPDATE
      case config.FIND_SUCCESS:
        return {
          ...state,
          item: (action.payload.item || state.item),
          error: null,
          loading: false,
          findLoading: false
        };
      case config.FETCH_SUCCESS:
        return {
          ...state,
          fetchResponse: action.payload,
          error: null,
          loading: false,
          fetchLoading: false,
          fetched: true,
          fetchPending: false
        };
      case config.CREATE_SUCCESS:
        return {
          ...state,
          error: null,
          loading: false,
          createLoading: false,
          fetchPending: true
        };
      case config.DELETE_SUCCESS:
        return {
          ...state,
          error: null,
          loading: false,
          deleteLoading: false,
          fetchPending: true
        };
      case config.UPDATE_SUCCESS:
        return {
          ...state,
          error: null,
          loading: false,
          updateLoading: false,
          fetchPending: true
        };
      // FAILURE - FETCH CREATE DELETE UPDATE
      case config.FIND_FAILURE:
        return {
          ...state,
          error: action.payload.error,
          loading: false,
          findLoading: false
        };
      case config.FETCH_FAILURE:
        return {
          ...state,
          error: action.payload.error,
          loading: false,
          fetchLoading: false
        };
      case config.CREATE_FAILURE:
        return {
          ...state,
          error: action.payload.error,
          loading: false,
          createLoading: false
        };
      case config.DELETE_FAILURE:
        return {
          ...state,
          error: action.payload.error,
          loading: false,
          deleteLoading: false
        };
      case config.UPDATE_FAILURE:
        return {
          ...state,
          error: action.payload.error,
          loading: false,
          updateLoading: false
        };
      default:
        return this.defaultReduce(state, action) || state;
    }
  }
}

