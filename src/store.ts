import { Reducer, AnyAction, combineReducers } from 'redux';
import { PageReducer, PageState } from './store/pages/reducer';
import { GlobalReducer, GlobalState } from './store/global/reducer';

export interface IApplicationState {
  page: PageState;
  global: GlobalState;
}
interface ResetAction {
  type: 'RESET_APP';
}
export const resetApp = (): ResetAction => ({
  type: 'RESET_APP',
});
export const appLayerReducer = combineReducers<IApplicationState>({
  global: GlobalReducer,
  page: PageReducer,
});

export const appReducer: Reducer<IApplicationState> = (
  state: IApplicationState | undefined,
  action: AnyAction
): IApplicationState => {
  if (action.type === 'RESET_APP') {
    localStorage.clear();
    state = undefined;
  }
  return appLayerReducer(state, action);
};
