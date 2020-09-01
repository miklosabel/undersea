/*
  Definition of Login state to store in Redux. 
  Definition of Initial Login state, which is type of LoginState
*/

import { LoadingStatusInterface } from '../../../mock/interface';

export interface LoginState extends LoadingStatusInterface {
  params: {
    name: string,
    password: string,
  },
  data: {
    isConnected: boolean,
  }
}

export const LoginInitState: LoginState = {
    params: {
      name: '',
      password: '',
    },
    data: {
      //by default this value is false
      isConnected: false,
    },
    isDataLoaded: false,
    isError: false,
    isLoading: false,
    error: '',
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
