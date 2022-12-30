import { put, call, all, select, CallEffect } from 'redux-saga/effects' // select
import { ThemeEnum } from '../enums/Action/Theme.enum';
import { ThemeValueEnum } from '../enums/ThemeValue.enum';
import { RootState } from '../reducers';
import { ThemeState } from '../reducers/Theme';
import { ThemeService } from '../services/Theme';

export class ThemeSaga {
  static getSagasFunction() {
    const obj = new ThemeSaga();
    return obj.getSagasFunction();
  }

  static getSagas() {
    const obj = new ThemeSaga();
    return obj.getSagas();
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public service: ThemeService = new ThemeService()
  ) { }

  public getSagasFunction() {
    return this.getSagas.bind(this);
  }

  public * getSagas() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    // const context = this
    yield all([
      /*
      takeLatest(ThemeEnum.LOAD, context.load.bind(context)),
      takeLatest([
        ThemeEnum.SET_DARK,
        ThemeEnum.SET_LIGHT,
        ThemeEnum.TOGGLE
      ], context.set.bind(context))
      */
    ]);
  }

  private getThemeEnum(action: any, state: any) {
    switch (action.type) {
      case ThemeEnum.SET_DARK:
        return ThemeValueEnum.dark;
      case ThemeEnum.SET_LIGHT:
        return ThemeValueEnum.light;
      case ThemeEnum.TOGGLE:
        return (state.value === ThemeValueEnum.light
          ? ThemeValueEnum.dark
          : ThemeValueEnum.light
        );
      default:
        return action.payload;
    }
  }

  public * set(action: any) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const service = context.service;
    const state: ThemeState = yield select((state: RootState): ThemeState => state.theme);
    const themeEnum = this.getThemeEnum(action, state);
    const data: CallEffect<any> = yield call(service.set.bind(service), themeEnum);
    yield put({ type: ThemeEnum.SET, payload: data });
    return null;
  }

  public * load() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;
    const service = context.service;
    const data: CallEffect<any> = yield call(service.load.bind(service));
    yield put({ type: ThemeEnum.LOAD_SUCCESS, payload: data });
    return null;
  }
}
export default ThemeSaga.getSagasFunction();
