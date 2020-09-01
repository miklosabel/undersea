import { buildingRequestAction } from "../../pages/buildings/action";
import { sendAttackAction } from "../../pages/attacks/action";

export type IMainActions =
  buildingRequestAction | sendAttackAction;  