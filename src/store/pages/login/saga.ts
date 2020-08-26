import { takeEvery, put } from 'redux-saga/effects';
import {
  PossibleLoginActions,
  loginErrorActionCall,
  loginResponseActionCall,
  LoginRequestAction,
  LoginInitAction,
} from './action';
import { push } from 'connected-react-router';
import { mainUrlPath, loginUrlPath } from '../../../urlpaths';

// LOGINREQUEST KEZELESE ES ELKAPASA KET FUGGVENYBEN 
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

// EZ KAPJA EL A LOGIN REQUESTET ES HIVJA A HANDLEFETCH-ET 
export function* watchLoginAction() {
  yield takeEvery(PossibleLoginActions.REQUEST, handleFetch);
}
//////////////////////////
// LOGINRESPONSE KEZELESE ES ELKAPASA KET FUGGVENYBEN
function* pushState() {
  yield put(push(mainUrlPath));
}
// HA SIKERES A BEJELENTKEZES AKKOR ELPUSHOLJUK A MAIN OLDALRA 
export function* watchLoginResponseAction() {
  yield takeEvery(PossibleLoginActions.SUCCESS, pushState);
}
///////////////////////////
//Elpusholjuk aszerint, hogy init actionben be van-e jelentkezve
function* pushInit(action: LoginInitAction) {
  yield put(push(action.payload ? mainUrlPath : loginUrlPath));
}

export function* watchInitResponseAction() {
  yield takeEvery(PossibleLoginActions.INIT, pushInit);
}
