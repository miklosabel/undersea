import {
  PossibleBuildingActions,
} from '../../pages/buildings/action';
import { PossibleAttackActions } from '../../pages/attacks/action';

export type PossibleMainActions = PossibleBuildingActions | PossibleAttackActions;
