/*
  Definition of Login state to store in Redux. 
  Definition of Initial Login state, which is type of LoginState
*/

export interface LoginState {
  params: {
    name: string;
    password: string;
  };
  isLoading: boolean;
  isDataLoaded: boolean;
  isError: boolean;
  data: {};  // answer of network request
}

export const LoginInitState: LoginState = {
  data: {},
  isDataLoaded: false,
  isError: false,
  isLoading: false,
  params: {
    name: '',
    password: '',
  },
};
