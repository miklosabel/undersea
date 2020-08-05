import { takeEvery, put } from 'redux-saga/effects';
import {
  PossibleLoginActions,
  loginErrorActionCall,
  loginResponseActionCall,
  LoginRequestAction,
  LoginInitAction,
} from './action';
import { push } from 'connected-react-router';

function* handleFetch(action: LoginRequestAction) {
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
// route to /main
function* pushState() {
  yield put(push('/main'));
}
//Elpusholjuk aszerint, hogy init actionben be van-e jelentkezve
function* pushInit(action: LoginInitAction) {
  yield put(push(action.payload ? '/main' : '/login'));
}
// in case of catching LoginResponseAction push router state to /main
export function* watchLoginResponseAction() {
  yield takeEvery(PossibleLoginActions.RESPONSE, pushState);
}

export function* watchInitResponseAction() {
  yield takeEvery(PossibleLoginActions.INIT, pushInit);
}
