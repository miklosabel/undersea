import { mainInitState, MainState } from './store';
import { IMainActions } from './action';
import { combineReducers } from 'redux';
import { BuildingReducer } from '../../pages/buildings/reducer';

// export const MainReducer = (
//   state = mainInitState,
//   action: IMainActions
// ): MainState => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };
export const MainReducer = combineReducers<MainState>({
})
