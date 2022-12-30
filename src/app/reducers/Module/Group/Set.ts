import { GroupEnum } from '../../../enums/Action/Module/Group.enum';


export interface SetGroupState {
  item: any;
  fix: boolean;
  options: Array<any>;
  error: any;
  loading: boolean;
}

export const initialState: SetGroupState = {
  item: null as any,
  fix: false,
  options: [],
  error: null as any,
  loading: false
}

export const setGroupReducer = (state: SetGroupState = initialState, action: any): SetGroupState => {
  const actionType = action.type
  switch (actionType) {
    case GroupEnum.SET:
      return {
        ...state,
        item: action.payload,
        fix: false
      }
    case GroupEnum.SET_FIX:
      return {
        ...state,
        item: action.payload,
        fix: true
      }
    case GroupEnum.CLEAR_SET:
      return initialState
    case GroupEnum.FETCH:
      return state // saga actions
    case GroupEnum.FETCH_PENDING:
      return {
        ...state,
        error: null,
        loading: true
      }
    case GroupEnum.FETCH_SUCCESS:
      return {
        ...state,
        options: (action?.payload?.items || []),
        error: null,
        loading: false
      }
    case GroupEnum.FETCH_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    default:
      return state
  }
}

export default setGroupReducer