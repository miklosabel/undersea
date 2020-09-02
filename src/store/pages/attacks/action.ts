import {
  attackingArmyListInterface,
  attackActionPayloadInterface,
} from '../../../mock/interface';

export interface AttackActionTypes {
  REQUEST: 'ATTACK_REQUEST';
  RESPONSE: 'ATTACK_RESPONSE';
}
export const PossibleAttackActionTypes: AttackActionTypes = {
  REQUEST: 'ATTACK_REQUEST',
  RESPONSE: 'ATTACK_RESPONSE',
};

export type PossibleAttackActions = attackRequestAction | attackResponseAction;

export interface attackRequestAction {
  type: AttackActionTypes['REQUEST'];
  payload: attackActionPayloadInterface;
}

export const attackRequestActionCall = (params: {
  shark: number;
  seal: number;
  seahorse: number;
  attackingArmyList: attackingArmyListInterface[];
}): attackRequestAction => ({
  type: PossibleAttackActionTypes.REQUEST,
  payload: params,
});

export interface attackResponseAction {
  type: AttackActionTypes['RESPONSE'];
  payload: boolean;
}

export const attackResponseActioncall = (
  response: boolean
): attackResponseAction => ({
  type: PossibleAttackActionTypes.RESPONSE,
  payload: response,
});
