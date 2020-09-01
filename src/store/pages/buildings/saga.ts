import { takeEvery, put } from 'redux-saga/effects';
import {
  PossibleBuildingActions,
  buildingRequestAction,
  buildingResponseActionCall,
} from './action';
import { push } from 'connected-react-router';
import {mainUrlPath} from '../../../urlpaths';

function* handleFetch(action: buildingRequestAction) {
  //TODO ide lehetne egy logika ami egy random szam szerint valaszt, hogy response vagy error legyen
  yield put(buildingResponseActionCall(true));
}

export function* watchBuildingRequestAction() {
  yield takeEvery(PossibleBuildingActions.REQUEST, handleFetch);
}

function* pushToMain() {
  yield put(push(mainUrlPath));
}

export function* watchBuildingResponseAction() {
  yield takeEvery(PossibleBuildingActions.SUCCESS, pushToMain);
}
