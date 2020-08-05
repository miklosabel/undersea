import { mainInitState, MainState } from "./store";
import { IMainActions } from "./action";
import { PossibleBuildingActions } from "../../pages/buildings/action";

// TODO find out what actions we need
export const MainReducer = (state=mainInitState, action: IMainActions): MainState => {
  switch (action.type) {
    case PossibleBuildingActions.START_BUILD:
      return {
        ...state, 
        status: {
          shell: action.payload.shell,
          isAtollFortressBuilding: action.payload.isAtollFortressBuilding,
          isFlowControllerBuilding: action.payload.isFlowControllerBuilding,
          roundsBeforeNewBuilding: action.payload.roundsBeforeNewBuilding,
          round: state.status.round,
          rank: state.status.rank,
          shark: state.status.shark,
          seal: state.status.seal,
          seahorse: state.status.seahorse,
          shellIncome: state.status.shellIncome,
          coral: state.status.coral,
          coralIncome: state.status.coralIncome,
          atollFortress: state.status.atollFortress,
          flowController: state.status.flowController,
        }
      };
    default:
      return state;
  }
}