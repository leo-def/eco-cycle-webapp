import {
  takeLatest, put, call, all, debounce
} from 'redux-saga/effects'; // select
import i18n from 'i18next';
// eslint-disable-next-line no-unused-vars
import {
  CrudService
} from '../../services/Crud';
import { ActionTypeEnum } from '../../enums/Crud/ActionTypeEnum.enum';
import { CrudState } from '../../types/Crud/CrudState';
import { MessageVariantEnum } from '../../enums/MessageVariant.enum';
import { MessageEnum } from '../../enums/Action/Message.enum';
import { LoadingEnum } from '../../enums/Action/Loading.enum';

const getActionMsg = (action) => {
  const msg = (action.payload
    ? (action.payload.message || (action.payload.message === '')
      ? action.payload.message
      : (
        (action.payload.error && action.payload.error.response)
          ? action.payload.error.response.data
          : ('')
      )
    )
    : '');
  return msg;
}

export class CrudSaga {
  config: CrudState;
  service: CrudService;
  params: any;

  static getSagasFunction(config: CrudState, service: CrudService, params: any) {
    const obj = new CrudSaga(config, service, params);
    return obj.getSagasFunction();
  }

  static getSagas(config: CrudState, service: CrudService, params: any) {
    const obj = new CrudSaga(config, service, params);
    return obj.getSagas();
  }

  constructor(config: CrudState, service: CrudService, params: any = null) {
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
      debounce(600, contextConfig.FETCH, context.fetch.bind(context)),
      takeLatest(contextConfig.FIND, context.find.bind(context)),
      takeLatest(contextConfig.CREATE, context.create.bind(context)),
      takeLatest(contextConfig.DELETE, context.remove.bind(context)),
      takeLatest(contextConfig.UPDATE, context.update.bind(context)),
      takeLatest([
        contextConfig.SET_FETCH_PARAMS,
      ], context.setFetchParams.bind(context)),
      takeLatest([
        contextConfig.CREATE_SUCCESS,
        contextConfig.DELETE_SUCCESS,
        contextConfig.UPDATE_SUCCESS
      ], context.onSuccess.bind(context)),
      takeLatest(
        [
          // SUCCESS
          contextConfig.FIND_SUCCESS,
          contextConfig.FETCH_SUCCESS,
          contextConfig.CREATE_SUCCESS,
          contextConfig.DELETE_SUCCESS,
          contextConfig.UPDATE_SUCCESS,
          // FAILURE
          contextConfig.FIND_FAILURE,
          contextConfig.FETCH_FAILURE,
          contextConfig.CREATE_FAILURE,
          contextConfig.DELETE_FAILURE,
          contextConfig.UPDATE_FAILURE
        ],
        context.msg.bind(context)
      ),
      ...this.getOthersSagas()
    ];
  }

  public * msg(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    let variant = MessageVariantEnum.INFO;
    let msg = getActionMsg(action);

    switch (action.type) {
      case contextConfig.CREATE_SUCCESS:
        msg = i18n.t('message.crud.create.success');
        variant = MessageVariantEnum.SUCCESS;
        break;
      case contextConfig.DELETE_SUCCESS:
        msg = i18n.t('message.crud.delete.success');
        variant = MessageVariantEnum.SUCCESS;
        break;
      case contextConfig.UPDATE_SUCCESS:
        msg = i18n.t('message.crud.update.success');
        variant = MessageVariantEnum.SUCCESS;
        break;
      case contextConfig.FIND_SUCCESS:
        msg = i18n.t('message.crud.find.success');
        variant = MessageVariantEnum.INFO;
        break;
      case contextConfig.FETCH_SUCCESS:
        msg = i18n.t('message.crud.fetch.success');
        variant = MessageVariantEnum.INFO;
        break;
      // FAILURE
      case contextConfig.FIND_FAILURE:
        msg = i18n.t('message.crud.find.error', { message: msg });
        variant = MessageVariantEnum.ERROR;
        break;
      case contextConfig.FETCH_FAILURE:
        msg = i18n.t('message.crud.fetch.error', { message: msg });
        variant = MessageVariantEnum.ERROR;
        break;
      case contextConfig.CREATE_FAILURE:
        msg = i18n.t('message.crud.create.error', { message: msg });
        variant = MessageVariantEnum.ERROR;
        break;
      case contextConfig.DELETE_FAILURE:
        msg = i18n.t('message.crud.delete.error', { message: msg });
        variant = MessageVariantEnum.ERROR;
        break;
      case contextConfig.UPDATE_FAILURE:
        msg = i18n.t('message.crud.update.error', { message: msg });
        variant = MessageVariantEnum.ERROR;
        break;
    }
    // chamar servico de mensagem
    const payload = { message: msg, variant };
    yield put({ type: MessageEnum.SHOW_MESSAGE, payload });
  }

  // ##!! Usar outra solução, chamar direto em tela
  public * onSuccess(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    const { config, fetchParams } = (action.request || null);
    yield put({
      type: contextConfig.FETCH,
      payload: {
        config,
        fetchParams
      }
    });
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

  public * create(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    const service = context.service;
    yield put({ type: LoadingEnum.START_LOADING, payload: 'create' });
    yield put({ type: contextConfig.CREATE_PENDING });
    try {
      const { item, ...others } = action.payload;
      const create = yield call(
        service.create.bind(service),
        item,
        others
      );
      yield put({
        type: contextConfig.CREATE_SUCCESS,
        payload: { item: create },
        request: action.payload
      });
      yield put({
        type: contextConfig.SET_ACTION,
        payload: { action: ActionTypeEnum.LIST, item: null },
        request: action.payload
      });
    } catch (error) {
      yield put({ type: contextConfig.CREATE_FAILURE, payload: { error } });
      console.error(error); // eslint-disable-line
    } finally {
      yield put({ type: LoadingEnum.STOP_LOADING, payload: 'create' });
    }
  }

  public * remove(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    const service = context.service;
    yield put({ type: LoadingEnum.START_LOADING, payload: 'remove' });
    yield put({ type: contextConfig.DELETE_PENDING });
    try {
      const { item, ...others } = action.payload;
      yield call(
        service.remove.bind(service),
        item,
        others
      );
      yield put({
        type: contextConfig.DELETE_SUCCESS,
        request: action.payload
      });
      yield put({
        type: contextConfig.SET_ACTION,
        payload: { action: ActionTypeEnum.LIST, item: null },
        request: action.payload
      });
    } catch (error) {
      yield put({
        type: contextConfig.DELETE_FAILURE,
        payload: { error },
        request: action.payload
      });
      console.error(error); // eslint-disable-line
    } finally {
      yield put({ type: LoadingEnum.STOP_LOADING, payload: 'remove' });
    }
  }

  public * update(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    const service = context.service;
    yield put({ type: LoadingEnum.START_LOADING, payload: 'update' });
    yield put({ type: contextConfig.UPDATE_PENDING });
    try {
      const { item, ...others } = action.payload;
      const updatedPost = yield call(
        service.update.bind(service),
        item,
        others
      );
      yield put({
        type: contextConfig.UPDATE_SUCCESS,
        payload: { item: updatedPost },
        request: action.payload
      });
      yield put({
        type: contextConfig.SET_ACTION,
        payload: { action: ActionTypeEnum.LIST, item: null }
      });
    } catch (error) {
      yield put({
        type: contextConfig.UPDATE_FAILURE,
        payload: { error },
        request: action.payload
      });
      console.error(error); // eslint-disable-line
    } finally {
      yield put({ type: LoadingEnum.STOP_LOADING, payload: 'update' });
    }
  }

  public * find(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    const service = context.service;
    yield put({ type: LoadingEnum.START_LOADING, payload: 'find' });
    yield put({ type: contextConfig.FIND_PENDING });
    try {
      const { item, ...others } = action.payload;
      const findResult = yield call(
        service.find.bind(service),
        item,
        others
      );
      yield put({
        type: contextConfig.FIND_SUCCESS,
        payload: { item: findResult }
      });
    } catch (error) {
      yield put({ type: contextConfig.FIND_FAILURE, payload: { error } });
      console.error(error); // eslint-disable-line
    } finally {
      yield put({ type: LoadingEnum.STOP_LOADING, payload: 'find' });
    }
  }

  public * fetch(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const contextConfig = context.config;
    const service = context.service;
    const { disableLoading, ...others } = (action.payload || {});
    if (!disableLoading) {
      yield put({ type: LoadingEnum.START_LOADING, payload: 'fetch' });
    }
    yield put({ type: contextConfig.FETCH_PENDING });
    try {
      const postsFromApi = yield call(
        service.fetch.bind(service),
        others
      );
      yield put({
        type: contextConfig.FETCH_SUCCESS,
        payload: postsFromApi
      });
    } catch (error) {
      yield put({
        type: contextConfig.FETCH_FAILURE,
        payload: { error }
      });
      console.error(error); // eslint-disable-line
    } finally {
      if (!disableLoading) {
        yield put({ type: LoadingEnum.STOP_LOADING, payload: 'fetch' });
      }
    }
  }

}
