import { AuthEnum } from '../enums/Action/Auth.enum';

export interface AuthState {
  error?: any;
  loading: boolean;
  token?: string;
  isAuth: boolean;
  userLoad: boolean;
}

export const initialValues: AuthState = {
  loading: false,
  isAuth: false,
  userLoad: false
};

export default function reduce(state = initialValues, action: any) {
  switch (action.type) {
    case AuthEnum.LOAD:
    case AuthEnum.AUTH:
      return state // saga actions
    case AuthEnum.AUTH_PENDING:
      return {
        ...state,
        error: null,
        loading: true,
        token: null
      };
    case AuthEnum.LOAD_FAILURE:
      return {
        ...state,
        error: action?.payload?.error,
        loading: false,
        token: null,
        isAuth: false,
        userLoad: true
      };
    case AuthEnum.LOAD_SUCCESS:
    case AuthEnum.AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        token: action?.payload?.token || null,
        isAuth: !!action?.payload?.token,
        userLoad: true
      };
    // FAILURE
    case AuthEnum.AUTH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
        token: null,
        isAuth: false,
        userLoad: true
      };
    case AuthEnum.LOGOUT:
      return {
        ...state,
        loading: false,
        token: null,
        isAuth: false,
        userLoad: true
      };
    default:
      return state;
  }
}
