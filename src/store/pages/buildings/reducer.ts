import { PossibleBuildingActionTypes, PossibleBuildingActions } from './action';
import { mainInitState, MainState } from '../../global/main/store';

export const BuildingReducer = (
  state = mainInitState,
  action: PossibleBuildingActions
): MainState => {
  switch (action.type) {
    case PossibleBuildingActionTypes.REQUEST:
      console.log('buildingrequest fired: reducer');
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
    case PossibleBuildingActionTypes.SUCCESS:
      return {
        ...state,
        isDataLoaded: true,
        isLoading: false,
        isError: false,
      }

    case PossibleBuildingActionTypes.ERROR:
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
