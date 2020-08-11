import { attackingArmyListInterface } from '../../../mock/interface';

export interface AttackActionTypes {
  SEND_ATTACK: 'ATTACKS_SEND_ATTACK';
}
export const PossibleAttackActions: AttackActionTypes = {
  SEND_ATTACK: 'ATTACKS_SEND_ATTACK',
};

export interface sendAttackAction {
  type: AttackActionTypes['SEND_ATTACK'];
  payload: {
    shark: number;
    seal: number;
    seahorse: number;
    attackingArmyList: attackingArmyListInterface[];
  };
}

export const sendAttackActionCreator = (params: {
  shark: number;
  seal: number;
  seahorse: number;
  attackingArmyList: attackingArmyListInterface[];
}): sendAttackAction => ({
  type: PossibleAttackActions.SEND_ATTACK,
  payload: params,
});
