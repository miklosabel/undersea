export interface LoginState {
  params: {
    name: string;
    password: string;
  };
  isLoading: boolean;
  isDataLoaded: boolean;
  isError: boolean;
  data: {};
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
