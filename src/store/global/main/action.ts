import { startBuildAction } from "../../pages/buildings/action";
import { sendAttackAction } from "../../pages/attacks/action";

export type IMainActions =
  startBuildAction | sendAttackAction;  