import { PossibleBuildingActions, IBuildingActions } from './action';
import { mainInitState, MainState } from '../../global/main/store';

export const BuildingReducer = (
  state = mainInitState,
  action: IBuildingActions
): MainState => {
  switch (action.type) {
    case PossibleBuildingActions.REQUEST:
      return {
        ...state,
        status: {
          ...state.status,
          shell: action.payload.shell,
          isAtollFortressBuilding: action.payload.isAtollFortressBuilding,
          isFlowControllerBuilding: action.payload.isFlowControllerBuilding,
          roundsBeforeNewBuilding: action.payload.roundsBeforeNewBuilding,
        },
        isLoading: true,
      };
    case PossibleBuildingActions.SUCCESS:
      return {
        ...state,
        isDataLoaded: true,
        isLoading: false,
        isError: false,
      }

    case PossibleBuildingActions.ERROR:
      return{
        ...state,
        isDataLoaded: false,
        isLoading: false,
        isError: true,
        error: action.payload,
      }
    default:
      return state;
  }
};
