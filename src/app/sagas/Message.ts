import {
  takeLatest,
  put,
  all,
  delay
} from 'redux-saga/effects' // select, call
import { MessageEnum } from '../enums/Action/Message.enum';
import { v4 as uuid } from 'uuid';

export class MessageSaga {
  static getSagasFunction() {
    const obj = new MessageSaga()
    return obj.getSagasFunction()
  }

  static getSagas() {
    const obj = new MessageSaga()
    return obj.getSagas()
  }

  public getSagasFunction() {
    return this.getSagas.bind(this)
  }

  public * getSagas() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    yield all([
      takeLatest(MessageEnum.SHOW_MESSAGE, context.add.bind(context))
    ])
  }

  public * add(action: any) {
    const payload = {
      ...(action.payload || {}),
      id: (action.payload?.id || uuid())
    }
    try {
      yield put({ type: MessageEnum.ADD_MESSAGE, payload })
      yield delay(3000)
    } finally {
      yield put({ type: MessageEnum.REMOVE_MESSAGE, payload })
    }
  }
}
export default MessageSaga.getSagasFunction()
