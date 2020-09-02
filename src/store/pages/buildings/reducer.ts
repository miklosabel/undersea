import { PossibleBuildingActionTypes, PossibleBuildingActions } from './action';
import { mainInitState, MainState } from '../../global/main/store';

export const BuildingReducer = (
  state = mainInitState,
  action: PossibleBuildingActions
): MainState => {
  switch (action.type) {

    default:
      return state;
  }
};
//TODO remove this file