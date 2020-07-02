import { all } from 'redux-saga/effects';
import { watchLoginAction, watchLoginResponseAction } from './login/saga';
export function* pageSaga() {
  yield all([watchLoginAction(), watchLoginResponseAction()]);
}
