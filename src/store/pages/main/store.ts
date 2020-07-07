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
    buildings: number;
    isBuilding: boolean;
    upgrades: number;
    isUpgrading: boolean;
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
    buildings: 0,
    isBuilding: false,
    upgrades: 0,
    isUpgrading: false,
  },
};
