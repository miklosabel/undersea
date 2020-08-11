import { mainInitState, MainState } from "./store";
import { IMainActions } from "./action";
import { PossibleBuildingActions } from "../../pages/buildings/action";
import { PossibleAttackActions } from "../../pages/attacks/action";

// TODO find out what actions we need
export const MainReducer = (state=mainInitState, action: IMainActions): MainState => {
  switch (action.type) {
    case PossibleBuildingActions.START_BUILD:
      return {
        ...state, 
        status: {
          ...state.status,
          shell: action.payload.shell,
          isAtollFortressBuilding: action.payload.isAtollFortressBuilding,
          isFlowControllerBuilding: action.payload.isFlowControllerBuilding,
          roundsBeforeNewBuilding: action.payload.roundsBeforeNewBuilding,

       }
      };
      case PossibleAttackActions.SEND_ATTACK:
        return {
          ...state,
          status: {
            ...state.status,
            shark: action.payload.shark,
            seal: action.payload.seal,
            seahorse: action.payload.seahorse,
          },
          attackingArmyList: action.payload.attackingArmyList
        }
    default:
      return state;
  }
}