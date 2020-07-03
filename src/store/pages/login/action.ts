export interface LoginActionTypes {
  REQUEST: 'LOGIN_REQUEST';
  RESPONSE: 'LOGIN_RESPONSE';
  ERROR: 'LOGIN_ERROR';
}
export const PossibleLoginActions: LoginActionTypes = {
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

export type ILoginActions =
  | LoginRequestAction
  | LoginResponseAction
  | LoginErrorAction;

//action creator
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
