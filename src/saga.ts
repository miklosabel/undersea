import { push } from 'connected-react-router';
import { all, put, takeEvery } from 'redux-saga/effects';

import { pageSaga } from './store/pages/saga';
import { loginUrlPath } from './urlpaths';

export function* rootSaga() {
  yield all([pageSaga(), watchResetAction()]);
}

export function* watchResetAction() {
  yield takeEvery('RESET_APP', pushState);
}

function* pushState() {
  yield put(push(loginUrlPath));
}
