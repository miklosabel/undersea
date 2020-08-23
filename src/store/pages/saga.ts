import { all } from 'redux-saga/effects';

import { watchInitResponseAction, watchLoginAction, watchLoginResponseAction } from './login/saga';

export function* pageSaga() {
  yield all([
    // Ha nem tetszik ez a form lehet hasznáni call(watchLoginAction)-nel is, amit sagából kell behúzni
    watchLoginAction(),
    watchLoginResponseAction(),
    watchInitResponseAction(),
  ]);
}
