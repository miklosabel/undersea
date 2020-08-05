import { all } from 'redux-saga/effects';
import {
  watchLoginAction,
  watchLoginResponseAction,
  watchInitResponseAction,
} from './login/saga';
export function* pageSaga() {
  yield all([
    watchLoginAction(),
    watchLoginResponseAction(),
    watchInitResponseAction(),
  ]);
}
