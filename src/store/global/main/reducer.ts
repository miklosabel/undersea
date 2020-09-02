import { mainInitState, MainState } from './store';
import { PossibleMainActions } from './action';
import { PossibleBuildingActionTypes } from '../../pages/buildings/action';
import { PossibleAttackActionTypes } from '../../pages/attacks/action';

export const MainReducer = (
  state = mainInitState,
  action: PossibleMainActions
): MainState => {
  switch (action.type) {
    case PossibleBuildingActionTypes.REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          ...action.payload,
        },
        isLoading: true,
      };
    case PossibleBuildingActionTypes.SUCCESS:
      return {
        ...state,
        isDataLoaded: true,
        isLoading: false,
        isError: false,
      };
    case PossibleBuildingActionTypes.ERROR:
      return {
        ...state,
        isDataLoaded: false,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    case PossibleAttackActionTypes.REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          ...action.payload,
        },
        isLoading: true,
      };
    case PossibleAttackActionTypes.SUCCESS:
      return {
        ...state,
        isDataLoaded: true,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};
