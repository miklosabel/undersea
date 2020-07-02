import { takeEvery, put } from 'redux-saga/effects';
import {
  PossibleLoginActions,
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
// generator function to catch all Request action and do other things
export function* watchLoginAction() {
  yield takeEvery(PossibleLoginActions.REQUEST, handleFetch);
}
