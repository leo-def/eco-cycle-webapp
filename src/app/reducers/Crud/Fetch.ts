import { FetchState } from '../../types/Crud/FetchState';
import { FetchResponse } from '../../types/Fetch/FetchResponse';

export interface FetchReducerState {
  fetchResponse: FetchResponse;
  fetchResponseByKey?: { [index: string]: FetchResponse }
}

export const initialState: FetchReducerState = {
  fetchResponse: {
    items: [],
    error: null,
    fetchLoading: false,
    fetched: false,
    fetchPending: false
  },
  fetchResponseByKey: {}
};

export class FetchReducer {
  config: FetchState = new FetchState()
  constructor(config: FetchState = new FetchState(), protected _defaultReduce: ((state: any, action: any) => any) | null = null) {
    this.config = config;
  }

  static getFetchResponse(state, key) {
    const response = key
      ? (state && state.fetchResponseByKey && state.fetchResponseByKey[key]
        ? state.fetchResponseByKey[key]
        : initialState.fetchResponse)
      : state.fetchResponse;
    return response;
  }

  static updateFetchResponse(state, value, fetchKey) {
    value = (value || {});
    const response = {
      ...state,
      ...(fetchKey
        ? {
          fetchResponseByKey: {
            ...(state.fetchResponseByKey || {}),
            [fetchKey]: {
              ...(state.fetchResponseByKey ? (state.fetchResponseByKey[fetchKey] || {}) : {}),
              ...value
            }
          }
        }
        : {
          fetchResponse: {
            ...(state.fetchResponse || {}),
            ...value
          }
        }
      )
    };
    return response;
  }

  static getReduce(config?: FetchState) {
    const val = new FetchReducer(config);
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

  reduce(state: FetchReducerState = initialState, action: any) {
    return this.afterReduce(
      this.mainReduce(
        this.beforeReduce(state, action),
        action),
      action);
  }

  mainReduce(state: FetchReducerState = initialState, action: any): FetchReducerState {
    const config = this.config;
    const actionType = action.type;
    const { fetchKey } = (action.payload || {});
    switch (actionType) {
      case config.CLEAR:
        return initialState
      // FETCH CREATE DELETE UPDATE
      case config.FETCH:
        return state; // saga actions
      // PENDING - FETCH CREATE DELETE UPDATE
      case config.FETCH_PENDING: {
        const value = {
          error: null,
          fetchLoading: true
        };
        const result = FetchReducer.updateFetchResponse(state, value, fetchKey);
        return result;
      }
      // SUCCESS - FETCH CREATE DELETE UPDATE
      case config.FETCH_SUCCESS: {
        const value = {
          ...(action?.payload?.fetchResponse || {}),
          error: null,
          fetchLoading: false,
          fetched: true,
          fetchPending: false
        };
        const result = FetchReducer.updateFetchResponse(state, value, fetchKey);
        return result;
      }
      // FAILURE - FETCH CREATE DELETE UPDATE
      case config.FETCH_FAILURE: {
        const value = {
          error: action.payload.error,
          fetchLoading: false
        };
        const result = FetchReducer.updateFetchResponse(state, value, fetchKey);
        return result;
      }
      default:
        return this.defaultReduce(state, action) || state;
    }
  }
}

