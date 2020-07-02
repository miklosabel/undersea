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
export interface LoginActionRequest {
  type: LoginActionTypes['REQUEST'];
  payload: {
    name: string;
    password: string;
  };
}
export interface LoginActionResponse {
  type: LoginActionTypes['RESPONSE'];
  payload: boolean;
}
export interface LoginActionError {
  type: LoginActionTypes['ERROR'];
  payload: string;
}

export type ILoginActions =
  | LoginActionRequest
  | LoginActionResponse
  | LoginActionError;

//action creator
export const loginRequestActionCall = (params: {
  name: string;
  password: string;
}): LoginActionRequest => ({
  type: PossibleLoginActions.REQUEST,
  payload: params,
});

export const loginResponseActionCall = (
  response: boolean
): LoginActionResponse => ({
  type: PossibleLoginActions.RESPONSE,
  payload: response,
});

export const loginErrorActionCall = (error: string): LoginActionError => ({
  type: PossibleLoginActions.ERROR,
  payload: error,
});
