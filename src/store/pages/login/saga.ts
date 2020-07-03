import { takeEvery, put } from 'redux-saga/effects';
import {
  PossibleLoginActions,
  loginErrorActionCall,
  loginResponseActionCall,
  LoginActionRequest,
} from './action';
import { push } from 'connected-react-router';

function* handleFetch(action: LoginActionRequest) {
  try {
    if (!action.payload.name || !action.payload.password) {
      throw Error;
    }
    yield put(loginResponseActionCall(true));
  } catch (err) {
    yield put(loginErrorActionCall('Kötelező mező'));
  }
}

// generator function to catch all Request action and do other things
export function* watchLoginAction() {
  yield takeEvery(PossibleLoginActions.REQUEST, handleFetch);
}
function* pushState() {
  console.log('alma');
  yield put(push('/main'));
}

export function* watchLoginResponseAction() {
  yield takeEvery(PossibleLoginActions.RESPONSE, pushState);
}
