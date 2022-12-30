import { takeLatest, put, call, all } from 'redux-saga/effects';
import { push } from '@lagunovsky/redux-react-router';
import { loginSuccessPageNav, logoutSuccessPageNav } from '../types/Auth';
import { LoadingEnum } from '../enums/Action/Loading.enum';
import { AuthEnum } from '../enums/Action/Auth.enum';
import { MessageEnum } from '../enums/Action/Message.enum';
import { MessageVariantEnum } from '../enums/MessageVariant.enum';
import authService from '../services/AuthService';


export class AuthSaga {
  protected service: any;

  static getSagasFunction() {
    const obj = new AuthSaga();
    return obj.getSagasFunction();
  }

  static getSagas() {
    const obj = new AuthSaga();
    return obj.getSagas();
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(
  ) {
    this.service = authService; // service
  }

  public getSagasFunction() {
    return this.getSagas.bind(this);
  }
  public * getSagas () {
    yield all([
      takeLatest(AuthEnum.AUTH, this.login.bind(this)),
      takeLatest(AuthEnum.LOAD, this.load.bind(this)),
      takeLatest(AuthEnum.LOGOUT, this.logout.bind(this)),
      takeLatest([
        AuthEnum.AUTH_SUCCESS,
        AuthEnum.AUTH_FAILURE
      ], this.msg.bind(this)),
      takeLatest([
        AuthEnum.AUTH_SUCCESS,
        AuthEnum.LOAD_SUCCESS
      ], this.authSuccess.bind(this))
    ]);
  }

  public * msg (action: any) {
    let msg: string | null = null;
    let variant = MessageVariantEnum.INFO;
    switch (action.type) {
      case AuthEnum.AUTH_SUCCESS:
        msg = 'Carregado com sucesso';
        variant = MessageVariantEnum.SUCCESS;
        break
      case AuthEnum.AUTH_FAILURE:
        msg = 'Erro ao carregar';
        variant = MessageVariantEnum.ERROR;
        break
    }
    // chamar serviço de mensagem
    const payload = { message: msg, variant };
    yield put({ type: MessageEnum.SHOW_MESSAGE, payload });
    yield call(console.log, msg);
  }

  public * login (action: any) {
    const service = this.service;
    yield put({ type: LoadingEnum.START_LOADING, payload: 'login' });
    yield put({ type: AuthEnum.AUTH_PENDING, payload: action.payload });
    try {
      const user = action.payload;
      const token = yield call(service.login.bind(service), user);
      yield put({ type: AuthEnum.AUTH_SUCCESS, payload: { token } });
    } catch (error) {
      yield put({ type: AuthEnum.AUTH_FAILURE, payload: [], error });
      console.error(error); // eslint-disable-line
    } finally {
      yield put({ type: LoadingEnum.STOP_LOADING, payload: 'login' });
    }
  }

  public * logout (action: any) {
    const service = this.service;
    yield call(service.logout.bind(service), action.payload);
    yield put(push(logoutSuccessPageNav));
  }

  public * load (action: any) {
    const service = this.service;
    try {
      const token = yield call(service.load.bind(service),  action?.payload?.token);
      //yield this.setGroup(data);
      yield put({ type: AuthEnum.LOAD_SUCCESS, payload: { token } });
    } catch(error) {
      yield put({ type: AuthEnum.LOAD_FAILURE, payload: { error } });
    }
    return null;
  }

  public * authSuccess (action: any) {
    const token = action?.payload?.token;
    if(token) {
      yield put(push(loginSuccessPageNav));
    }
  }

}

export default AuthSaga.getSagasFunction();
