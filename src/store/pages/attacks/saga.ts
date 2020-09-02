import {
  AttackRequestAction,
  attackResponseActionCall,
  PossibleAttackActionTypes,
} from './action';
import { takeEvery, put } from 'redux-saga/effects';
import { pushToMain } from '../buildings/saga';

function* handleFetch(action: AttackRequestAction) {
  yield put(attackResponseActionCall(true));
}

export function* watchAttackRequestAction() {
  console.log('saga: attack request catched');
  yield takeEvery(PossibleAttackActionTypes.REQUEST, handleFetch);
}
export function* watchAttackResponseAction() {
  yield takeEvery(PossibleAttackActionTypes.SUCCESS, pushToMain);
}
