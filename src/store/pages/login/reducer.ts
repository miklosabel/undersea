import { ILoginActions, LoginAction } from './action';
import { LoginInitState, LoginState } from './store';

export const LoginReducer = (
  state = LoginInitState,
  action: ILoginActions
): LoginState => {
  switch (action.type) {
    case LoginAction.REQUEST:
      return { ...state, isLoading: true, params: action.payload };
    case LoginAction.RESPONSE:
      return {
        ...state,
        data: action.payload,
        isDataLoaded: true,
        isLoading: false,
        isError: false,
      };
    case LoginAction.ERROR:
      return { ...state, isLoading: false, isDataLoaded: false, isError: true };
    default:
      return state;
  }
};
