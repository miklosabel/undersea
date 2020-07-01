import { allowedNodeEnvironmentFlags } from 'process';

import { all } from 'redux-saga/effects';
import { pageSaga } from './store/pages/saga';
export function* rootSaga() {
  yield all([pageSaga()]);
}
