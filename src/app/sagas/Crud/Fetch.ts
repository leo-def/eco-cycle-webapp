import {
  takeLatest, put, call, all, debounce, takeEvery
} from 'redux-saga/effects'; // select
import i18n from 'i18next';
// eslint-disable-next-line no-unused-vars
import {
  CrudService
} from '../../services/Crud';
import { FetchState } from '../../types/Crud/FetchState';
import { MessageVariantEnum } from '../../enums/MessageVariant.enum';
import { MessageEnum } from '../../enums/Action/Message.enum';
import { LoadingEnum } from '../../enums/Action/Loading.enum';

export class FetchSaga {
  config: FetchState;
  service: CrudService;
  params: any;

  static getSagasFunction(config: FetchState, service: CrudService, params: any) {
    const obj = new FetchSaga(config, service, params);
    return obj.getSagasFunction();
  }

  static getSagas(config: FetchState, service: CrudService, params: any) {
    const obj = new FetchSaga(config, service, params);
    return obj.getSagas();
  }

  constructor(config: FetchState, service: CrudService, params: any = null) {
    this.config = config;
    this.service = service;
    this.params = params;
  }

  public getSagasFunction() {
    return this.getSagas.bind(this);
  }

  public * getSagas() {
    yield all(this.getSagasArray());
  }

  public getOthersSagas() {
    return new Array<any>();
  }

  public getSagasArray() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    return [
      debounce(600, contextConfig.FETCH_WITH_DEBOUNCE, context.fetch.bind(context)),
      takeEvery(contextConfig.FETCH, context.fetch.bind(context)),
      takeLatest([
        contextConfig.SET_FETCH_PARAMS,
      ], context.setFetchParams.bind(context)),
      takeLatest(
        [
          // SUCCESS
          contextConfig.FETCH_SUCCESS,
          // FAILURE
          contextConfig.FETCH_FAILURE
        ],
        context.msg.bind(context)
      ),
      ...this.getOthersSagas()
    ];
  }

  public getItem(action: any) {
    const { item } = action.payload;
    return item;
  }

  public * msg(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    let variant = MessageVariantEnum.INFO;
    let msg = (action.payload
      ? (action.payload.message || (action.payload.message === '')
        ? action.payload.message
        : (
          (action.payload.error && action.payload.error.response)
            ? action.payload.error.response.data
            : ('')
        )
      )
      : '');

    switch (action.type) {
      case contextConfig.FETCH_SUCCESS:
        msg = i18n.t('message.crud.fetch.success');
        variant = MessageVariantEnum.INFO;
        break;
      // FAILURE
      case contextConfig.FETCH_FAILURE:
        msg = i18n.t('message.crud.fetch.error', { message: msg });
        variant = MessageVariantEnum.ERROR;
        break;
    }
    // chamar servico de mensagem
    const payload = { message: msg, variant };
    yield put({ type: MessageEnum.SHOW_MESSAGE, payload });
  }


  public * setFetchParams(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    yield put({
      type: contextConfig.FETCH,
      payload: action.payload
    });
  }

  public * fetch(action: any) {

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    const service = context.service;
    if (!action.payload || !action.payload.disableLoading) {
      yield put({ type: LoadingEnum.START_LOADING, payload: 'fetch' });
    }
    yield put({ type: contextConfig.FETCH_PENDING });
    try {
      const fetchResponse = yield call(
        service.fetch.bind(service),
        action.payload
      );
      yield put({
        type: contextConfig.FETCH_SUCCESS,
        payload: { ...action.payload, fetchResponse }
      });
    } catch (error) {
      console.error(error); // eslint-disable-line
      yield put({
        type: contextConfig.FETCH_FAILURE,
        payload: { ...action.payload, error }
      });
    } finally {
      if (!action.payload || !action.payload.disableLoading) {
        yield put({ type: LoadingEnum.STOP_LOADING, payload: 'fetch' });
      }
    }
  }

}
