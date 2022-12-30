// import { all } from 'redux-saga/effects';
import moduleSaga from './Module';
import authSaga from './Auth';
import localeSaga from './Locale';
import messageSaga from './Message';
import themeSaga from './Theme';

export const rootSaga = [
  ...moduleSaga,
  authSaga,
  localeSaga,
  messageSaga,
  themeSaga
]
export default rootSaga;
