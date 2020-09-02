import { push } from 'connected-react-router';
import { all, put, takeEvery } from 'redux-saga/effects';

import { loginUrlPath } from './urlpaths';
import {
  watchLoginAction,
  watchLoginResponseAction,
  watchInitResponseAction,
} from './store/pages/login/saga';
import {
  watchBuildingRequestAction,
  watchBuildingResponseAction,
} from './store/pages/buildings/saga';
import {
  watchAttackRequestAction,
  watchAttackResponseAction
} from './store/pages/attacks/saga';

export function* rootSaga() {
  yield all([
    watchLoginAction(),
    watchLoginResponseAction(),
    watchInitResponseAction(),
    watchBuildingRequestAction(),
    watchBuildingResponseAction(),
    watchAttackRequestAction(),
    watchAttackResponseAction(),
    watchResetAction(),
  ]);
}

export function* watchResetAction() {
  yield takeEvery('RESET_APP', pushState);
}

function* pushState() {
  yield put(push(loginUrlPath));
}
