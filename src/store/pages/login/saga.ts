import { takeEvery, put } from 'redux-saga/effects';
import {
  LoginAction,
  loginErrorActionCall,
  loginResponseActionCall,
} from './action';

function* handleFetch() {
  try {
    yield put(loginResponseActionCall({}));
  } catch (err) {
    yield put(loginErrorActionCall());
  }
}

export function* watchLoginAction() {
  yield takeEvery(LoginAction.REQUEST, handleFetch);
}
