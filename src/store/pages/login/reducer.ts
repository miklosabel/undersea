import { ILoginActions, PossibleLoginActions } from './action';
import { LoginInitState, LoginState } from './store';

export const LoginReducer = (
  state = LoginInitState,
  action: ILoginActions
): LoginState => {
  switch (action.type) {
    case PossibleLoginActions.REQUEST:
      return { ...state, isLoading: true, params: action.payload };
    case PossibleLoginActions.RESPONSE:
      return {
        ...state,
        data: { isConnected: action.payload },
        isDataLoaded: true,
        isLoading: false,
        isError: false,
      };
    case PossibleLoginActions.ERROR:
      return { ...state, isLoading: false, isDataLoaded: false, isError: true };
    default:
      return state;
  }
};
