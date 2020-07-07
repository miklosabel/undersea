export interface StatusState {
  round: number;
  rank: number;
  shark: number;
  seal: number;
  seahorse: number;
  shell : number;
  shellIncome : number;
  coral : number;
  coralIncome : number;
  buildings : number;
  upgrades : number;
}

export const statusProps: StatusState = {
  round: 5,
  rank : 5,
  shark : 3,
  seal : 2,
  seahorse : 43,
  shell : 112,
  shellIncome : 20,
  coral : 10,
  coralIncome : 5,
  buildings : 0,
  upgrades: 0,
}
