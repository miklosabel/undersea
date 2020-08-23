import { push } from 'connected-react-router';
import { all, put, takeEvery } from 'redux-saga/effects';

import { pageSaga } from './store/pages/saga';

export function* rootSaga() {
  yield all([pageSaga(), watchResetAction()]);
}

export function* watchResetAction() {
  yield takeEvery('RESET_APP', pushState);
}

function* pushState() {
  //Ha változna elérés, akkor akár ki is lehet url stringeket egy helyre szervezni, és onnan behúzni substring alapon, így elég lenne mindig 1 helyen változtatni, és 1 helyen meglenne összes elérés
  yield put(push('/login'));
}
