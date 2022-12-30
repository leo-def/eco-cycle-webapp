import {
  takeLatest,
  put,
  all,
  call
} from 'redux-saga/effects' // select, call
import { AddressEnum } from '../../../enums/Action/Address.enum';
import service from '../../../services/Module/Shared/Address';

export class AddressSaga {
  static getSagasFunction() {
    const obj = new AddressSaga();
    return obj.getSagasFunction();
  }

  static getSagas() {
    const obj = new AddressSaga();
    return obj.getSagas();
  }

  public getSagasFunction() {
    return this.getSagas.bind(this);
  }

  public * getSagas() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    yield all([
      takeLatest(AddressEnum.SEARCH_ADDRESS, context.searchAddressByCode.bind(context))
    ]);
  }

  public * searchAddressByCode(action: any) {
    const params = action.payload;
    const address = yield call(service.searchAddressByCode.bind(service), params);
    yield put({ type: AddressEnum.ADD_ADDRESS, payload: { address, ...params } });
  }

}

export default AddressSaga.getSagasFunction();
