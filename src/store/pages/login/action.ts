export interface LoginActionTypes {
  REQUEST: 'LOGIN_REQUEST';
  RESPONSE: 'LOGIN_RESPONSE';
  ERROR: 'LOGIN_ERROR';
}
export const LoginAction: LoginActionTypes = {
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
  payload: {};
}
export interface LoginActionError {
  type: LoginActionTypes['ERROR'];
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
  type: LoginAction.REQUEST,
  payload: params,
});

export const loginResponseActionCall = (response: {}): LoginActionResponse => ({
  type: LoginAction.RESPONSE,
  payload: response,
});

export const loginErrorActionCall = (): LoginActionError => ({
  type: LoginAction.ERROR,
});
