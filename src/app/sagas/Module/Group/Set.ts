import { takeLatest, put, all, call } from 'redux-saga/effects';
import { LoadingEnum } from '../../../enums/Action/Loading.enum';
import { GroupEnum } from '../../../enums/Action/Module/Group.enum';
import groupService from '../../../services/Module/Admin/Group';

export class LocaleSaga {
  protected service: any

  static getSagasFunction() {
    const obj = new LocaleSaga()
    return obj.getSagasFunction()
  }

  static getSagas() {
    const obj = new LocaleSaga()
    return obj.getSagas()
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(
  ) {
    this.service = groupService;
  }

  public getSagasFunction() {
    return this.getSagas.bind(this)
  }

  public * getSagas() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    yield all([
      takeLatest(GroupEnum.FETCH, context.fetch.bind(context)),
    ])
  }

  public * fetch(action: any) {

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const service = context.service;
    if (!action.payload || !action.payload.disableLoading) {
      yield put({ type: LoadingEnum.START_LOADING, payload: 'fetch' })
    }
    yield put({ type: GroupEnum.FETCH_PENDING })
    try {
      const postsFromApi = yield call(
        service.fetch.bind(service),
        action.payload
      )
      yield put({
        type: GroupEnum.FETCH_SUCCESS,
        payload: postsFromApi
      })
    } catch (error) {
      yield put({
        type: GroupEnum.FETCH_FAILURE,
        payload: { items: [], error }
      })
      console.error(error); // eslint-disable-line
    } finally {
      if (!action.payload || !action.payload.disableLoading) {
        yield put({ type: LoadingEnum.STOP_LOADING, payload: 'fetch' })
      }
    }
  }

}
export default LocaleSaga.getSagasFunction()
