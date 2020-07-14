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
  error: string;
  data: {
    isConnected: boolean;
  }; // answer of network request
}

export const LoginInitState: LoginState = {
  data: {
    // TODO set this value to false by default
    isConnected: true,
  },
  isDataLoaded: false,
  isError: false,
  isLoading: false,
  error: '',
  params: {
    name: '',
    password: '',
  },
};
