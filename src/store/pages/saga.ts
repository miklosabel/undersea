import { all } from 'redux-saga/effects';

import { watchInitResponseAction, watchLoginAction, watchLoginResponseAction } from './login/saga';
import { watchBuildingRequestAction, watchBuildingResponseAction } from './buildings/saga';

export function* pageSaga() {
  yield all([
    watchLoginAction(),
    watchLoginResponseAction(),
    watchInitResponseAction(),
    watchBuildingRequestAction(),
    watchBuildingResponseAction(),
  ]);
}
