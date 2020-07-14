import { mainInitState, MainState } from "./store";
import { IMainActions } from "./action";

// TODO find out what actions we need
export const MainReducer = (state=mainInitState, action: IMainActions): MainState => {
  switch (action.type) {
    default:
      return state;
  }
}