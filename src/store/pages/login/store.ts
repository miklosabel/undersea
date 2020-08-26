/*
  Definition of Login state to store in Redux. 
  Definition of Initial Login state, which is type of LoginState
*/

import { LoadingStatusInterface } from '../../../mock/interface';

export interface LoginState {
  loadingStatus: LoadingStatusInterface<
    { name: string; password: string },
    { isConnected: boolean }
  >;
}

export const LoginInitState: LoginState = {
  loadingStatus: {
    params: {
      name: '',
      password: '',
    },
    data: {
      //TODO by default this value is false
      isConnected: false,
    },
    isDataLoaded: false,
    isError: false,
    isLoading: false,
    error: '',
  },
};

// //Vagy
// interface Minta0{
//   isLoading: boolean;
//   isDataLoaded: boolean;
//   isError: boolean;
//   error: string;
// }
//  interface Minta2 extends Minta0{
//   params:any,
//   data:any
// }
