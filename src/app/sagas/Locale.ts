import { put, all } from 'redux-saga/effects'; // select
import { LocaleEnum } from '../enums/Action/Locale.enum';

export class LocaleSaga {
  protected service: any;

  static getSagasFunction() {
    const obj = new LocaleSaga();
    return obj.getSagasFunction();
  }

  static getSagas() {
    const obj = new LocaleSaga();
    return obj.getSagas();
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(
  ) {
    this.service = null; // service
  }

  public getSagasFunction() {
    return this.getSagas.bind(this);
  }

  public * getSagas() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    // const context = this
    yield all([
      // takeLatest(LocaleEnum.LOAD_LANGUAGES, context.loadLanguage.bind(context)),
    ]);
  }

  public * loadLanguage() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    // const context = this
    // const service = context.service
    try {
      //##!!
      const data = { items: [] } as any; // yield call(service.loadLanguage.bind(service))
      const languages = (data.items || [])
        .map((val: any) => val ? val.codigo : null)
        .filter((val: any) => val);
      yield put({ type: LocaleEnum.LOAD_LANGUAGES_SUCCESS, payload: { languages } });
    } catch (error) {
      yield put({ type: LocaleEnum.LOAD_LANGUAGES_FAILURE, payload: { error } });
      console.error(error); // eslint-disable-line
    }
    return null;
  }
}
export default LocaleSaga.getSagasFunction();
