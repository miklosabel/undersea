import { ILoginActions, PossibleLoginActions } from './action';
import { LoginInitState, LoginState } from './store';

export const LoginReducer = (
  state = LoginInitState,
  action: ILoginActions
): LoginState => {
  switch (action.type) {
    //Letároljuk be volt-e jelentkezve
    case PossibleLoginActions.INIT:
      return {
        ...state,
        isLoading: false,
        data: { isConnected: action.payload },
      };
    case PossibleLoginActions.REQUEST:
      return { ...state, isLoading: true, params: action.payload };
    //Letároljuk bejelentkezett
    case PossibleLoginActions.RESPONSE:
      localStorage.setItem('isConnected', JSON.stringify(action.payload));
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
