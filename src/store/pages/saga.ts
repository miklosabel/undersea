import { all } from 'redux-saga/effects';
import { watchLoginAction } from './login/saga';
export function* pageSaga() {
  yield all([watchLoginAction()]);
}
