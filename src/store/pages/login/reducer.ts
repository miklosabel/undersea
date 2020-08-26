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
        loadingStatus: {
          ...state.loadingStatus,
          isLoading: false,
          data: { isConnected: action.payload },
        },
      };
    case PossibleLoginActions.REQUEST:
      return {
        ...state,
        loadingStatus: {
          ...state.loadingStatus,
          isLoading: true,
          params: action.payload,
        },
      };
    //Letároljuk bejelentkezett
    case PossibleLoginActions.SUCCESS:
      localStorage.setItem('isConnected', JSON.stringify(action.payload));
      return {
        ...state,
        loadingStatus: {
          ...state.loadingStatus,
          data: { isConnected: action.payload },
          isDataLoaded: true,
          isLoading: false,
          isError: false,
        },
      };
    case PossibleLoginActions.ERROR:
      return {
        ...state,
        loadingStatus: {
          ...state.loadingStatus,
          isLoading: false,
          isDataLoaded: false,
          isError: true,
        },
      };
    default:
      return state;
  }
};
