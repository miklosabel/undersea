import { all } from 'redux-saga/effects';

import { watchInitResponseAction, watchLoginAction, watchLoginResponseAction } from './login/saga';

export function* pageSaga() {
  yield all([
    watchLoginAction(),
    watchLoginResponseAction(),
    watchInitResponseAction(),
  ]);
}
