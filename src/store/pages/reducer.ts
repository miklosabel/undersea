import { combineReducers } from 'redux';
import { LoginState } from './login/store';
import { LoginReducer } from './login/reducer';
import { MainState } from '../global/main/store';
import { MainReducer } from '../global/main/reducer';

export interface PageState {
  login: LoginState;
  main: MainState;
}

export const PageReducer = combineReducers<PageState>({
  login: LoginReducer,
  main: MainReducer,
});
