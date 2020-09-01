import { mainInitState, MainState } from './store';
import { IMainActions } from './action';
import { PossibleBuildingActions } from '../../pages/buildings/action';
import { PossibleAttackActions } from '../../pages/attacks/action';

export const MainReducer = (
  state = mainInitState,
  action: IMainActions
): MainState => {
  switch (action.type) {
    case PossibleAttackActions.SEND_ATTACK:
      return {
        ...state,
        status: {
          ...state.status,
          shark: action.payload.shark,
          seal: action.payload.seal,
          seahorse: action.payload.seahorse,
        },
        attackingArmyList: action.payload.attackingArmyList,
      };
    default:
      return state;
  }
};
