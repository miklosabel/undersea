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
    isAtollFortressBuilding: false,
    isFlowControllerBuilding: false,
    roundsBeforeNewBuilding: 0,
    round: 0,
    rank: 1,
    shark: 0,
    seal: 0,
    seahorse: 0,
    shellIncome: 20,
    shell: 0,
    coral: 0,
    coralIncome: 5,
    atollFortress: 0,
    flowController: 0,
  },
};
