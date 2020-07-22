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
}

export const mainInitState: MainState = {
  status: {
    shell: 112,
    isAtollFortressBuilding: false,
    isFlowControllerBuilding: false,
    roundsBeforeNewBuilding: 0,
    round: 5,
    rank: 5,
    shark: 3,
    seal: 2,
    seahorse: 43,
    shellIncome: 20,
    coral: 10,
    coralIncome: 5,
    atollFortress: 0,
    flowController: 0,
  },
};
