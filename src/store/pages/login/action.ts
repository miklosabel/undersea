export interface LoginActionTypes {
  INIT: 'LOGIN_INIT';
  REQUEST: 'LOGIN_REQUEST';
  RESPONSE: 'LOGIN_RESPONSE';
  ERROR: 'LOGIN_ERROR';
}
export const PossibleLoginActions: LoginActionTypes = {
  INIT: 'LOGIN_INIT',
  ERROR: 'LOGIN_ERROR',
  REQUEST: 'LOGIN_REQUEST',
  RESPONSE: 'LOGIN_RESPONSE',
};

//action
export interface LoginRequestAction {
  type: LoginActionTypes['REQUEST'];
  payload: {
    name: string;
    password: string;
  };
}
export interface LoginResponseAction {
  type: LoginActionTypes['RESPONSE'];
  payload: boolean;
}
export interface LoginErrorAction {
  type: LoginActionTypes['ERROR'];
  payload: string;
}
export interface LoginInitAction {
  type: LoginActionTypes['INIT'];
  payload: boolean;
}
export type ILoginActions =
  | LoginRequestAction
  | LoginResponseAction
  | LoginErrorAction
  | LoginInitAction;

//action creators
export const loginRequestActionCall = (params: {
  name: string;
  password: string;
}): LoginRequestAction => ({
  type: PossibleLoginActions.REQUEST,
  payload: params,
});

export const loginResponseActionCall = (
  response: boolean
): LoginResponseAction => ({
  type: PossibleLoginActions.RESPONSE,
  payload: response,
});

export const loginErrorActionCall = (error: string): LoginErrorAction => ({
  type: PossibleLoginActions.ERROR,
  payload: error,
});
export const loginInitActionCall = (isConnected: boolean): LoginInitAction => ({
  type: PossibleLoginActions.INIT,
  payload: isConnected,
});
