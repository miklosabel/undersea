import {
  AttackingArmyListInterface,
  AttackActionPayloadInterface,
} from '../../../mock/interface';

export interface AttackActionTypes {
  REQUEST: 'ATTACK_REQUEST';
  SUCCESS: 'ATTACK_SUCCESS';
}
export const PossibleAttackActionTypes: AttackActionTypes = {
  REQUEST: 'ATTACK_REQUEST',
  SUCCESS: 'ATTACK_SUCCESS',
};

export type PossibleAttackActions = AttackRequestAction | AttackResponseAction;

export interface AttackRequestAction {
  type: AttackActionTypes['REQUEST'];
  payload: AttackActionPayloadInterface;
}

export const attackRequestActionCall = (params: {
  shark: number;
  seal: number;
  seahorse: number;
  attackingArmyList: AttackingArmyListInterface[];
}): AttackRequestAction => ({
  type: PossibleAttackActionTypes.REQUEST,
  payload: params,
});

export interface AttackResponseAction {
  type: AttackActionTypes['SUCCESS'];
  payload: boolean;
}

export const attackResponseActionCall = (
  response: boolean
): AttackResponseAction => ({
  type: PossibleAttackActionTypes.SUCCESS,
  payload: response,
});
