import { attackingArmyListInterface } from '../../../mock/interface';

//TODO Ennek legyen meg rendesen a request-response error actionje,
export interface AttackActionTypes {
  SEND_ATTACK: 'ATTACKS_SEND_ATTACK';
}
export const PossibleAttackActions: AttackActionTypes = {
  SEND_ATTACK: 'ATTACKS_SEND_ATTACK',
};

export interface sendAttackAction {
  type: AttackActionTypes['SEND_ATTACK'];
  //TODO Ez mehetne külön interface, és akkor mindenhol azt használni ahol szükséges. 3-4 és afölötti kulcs-érték párnál lehet jobb kiszervezni
  payload: {
    shark: number;
    seal: number;
    seahorse: number;
    attackingArmyList: attackingArmyListInterface[];
  };
}
//Pl itt
export const sendAttackActionCreator = (params: {
  shark: number;
  seal: number;
  seahorse: number;
  attackingArmyList: attackingArmyListInterface[];
}): sendAttackAction => ({
  type: PossibleAttackActions.SEND_ATTACK,
  payload: params,
});
