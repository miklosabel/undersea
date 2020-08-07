import { attackListInterface } from "../../../mock/interface";

export interface MainState {
  status: {
    shell: number;
    isAtollFortressBuilding: boolean;
    isFlowControllerBuilding: boolean;
    roundsBeforeNewBuilding: number;
    round: number;
    rank: number;
    shark: number;
    seal: number;
    seahorse: number;
    shellIncome: number;
    coral: number;
    coralIncome: number;
    atollFortress: number;
    flowController: number;
  };
  attackList: attackListInterface[];
}

export const mainInitState: MainState = {
  status: {
    isAtollFortressBuilding: false,
    isFlowControllerBuilding: false,
    roundsBeforeNewBuilding: 0,
    round: 0,
    rank: 1,
    shark: 190,
    seal: 100,
    seahorse: 100,
    shellIncome: 20,
    shell: 105,
    coral: 98,
    coralIncome: 5,
    atollFortress: 0,
    flowController: 0,
  },
  attackList: []
};
