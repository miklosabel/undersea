import { AnyAction, combineReducers, Reducer } from 'redux';

import { PageReducer, PageState } from './store/pages/reducer';

export interface IApplicationState {
  page: PageState;
  // global: GlobalState;
}
// type of reset Action
interface IResetAction {
  type: 'RESET_APP';
}
//this Action will reset the store to initial state
export const resetApp = (): IResetAction => ({
  type: 'RESET_APP',
});

// child of RootReducer
export const appLayerReducer = combineReducers<IApplicationState>({
  // global: GlobalReducer,
  page: PageReducer,
});

export const appReducer: Reducer<IApplicationState> = (
  state: IApplicationState | undefined,
  action: AnyAction
): IApplicationState => {
  localStorage.setItem('state', JSON.stringify(state));
  if (action.type === 'RESET_APP') {
    localStorage.clear();
    //TODO Ez akár még lehet initialstate is alapállapothoz
    state = undefined;
  }
  return appLayerReducer(state, action);
};
