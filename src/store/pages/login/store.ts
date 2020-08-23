/*
  Definition of Login state to store in Redux. 
  Definition of Initial Login state, which is type of LoginState
*/

export interface LoginState {
  params: {
    name: string;
    password: string;
  };
  /////////Ez mehetne külön interface, és akkor mindehova az lenne behúzva, lentebb példa.
  isLoading: boolean;
  isDataLoaded: boolean;
  isError: boolean;
  error: string;
  //////////
  data: {
    isConnected: boolean;
  }; // answer of network request
}

export const LoginInitState: LoginState = {
  data: {
    // TODO set this value to false by default
    isConnected: false,
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

// interface Minta1<P,D>{
//   params: P
//   isLoading: boolean;
//   isDataLoaded: boolean;
//   isError: boolean;
//   error: string;
//   data: D
// }
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
