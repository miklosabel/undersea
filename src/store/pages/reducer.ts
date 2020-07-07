import { combineReducers } from 'redux';
import { LoginState } from './login/store';
import { LoginReducer } from './login/reducer';

export interface PageState {
  login: LoginState;
}

export const PageReducer = combineReducers<PageState>({
  login: LoginReducer,
});
