export interface MainState {
  status: {
    round: number;
    rank: number;
    shark: number;
    seal: number;
    seahorse: number;
    shell: number;
    shellIncome: number;
    coral: number;
    coralIncome: number;
    atollFortress: number;
    isAtollFortressBuilding: boolean;
    flowController: number;
    isFlowControllerBuilding: boolean;
  };
}

export const mainInitState: MainState = {
  status: {
    round: 5,
    rank: 5,
    shark: 3,
    seal: 2,
    seahorse: 43,
    shell: 112,
    shellIncome: 20,
    coral: 10,
    coralIncome: 5,
    atollFortress: 0,
    isAtollFortressBuilding: false,
    flowController: 0,
    isFlowControllerBuilding: false,
  },
};
