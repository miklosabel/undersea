import { buildingRequestAction } from '../../pages/buildings/action';
import { attackRequestAction } from '../../pages/attacks/action';

export type IMainActions = buildingRequestAction | attackRequestAction;
