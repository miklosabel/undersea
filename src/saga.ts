import { all, takeEvery, put } from 'redux-saga/effects';
import { pageSaga } from './store/pages/saga';
import { push } from 'connected-react-router';
export function* rootSaga() {
  yield all([pageSaga(), watchResetAction()]);
}

export function* watchResetAction() {
  yield takeEvery('RESET_APP', pushState);
}

function* pushState() {
  yield put(push('/login'));
}