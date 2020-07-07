export interface MainRequestAction {
  type: {}
  payload: {}
}
export interface MainResponseAction {
  type: {}
  payload: {}
}
export interface MainErrorAction {
  type: {}
  payload: {}
}
export type IMainActions =
  | MainRequestAction
  | MainResponseAction
  | MainErrorAction;