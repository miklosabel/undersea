import { History } from 'history';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {
  routerMiddleware,
  connectRouter,
  RouterState,
} from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from '../saga';
import { appReducer, IApplicationState } from '../store';

export interface RootState {
  app: IApplicationState;
  router: RouterState;
}
export function configStore(history: History) {
  const saga = createSagaMiddleware();
  const middleware = [saga, routerMiddleware(history)];

  const windowIfDefined =
    typeof window === 'undefined' ? null : (window as any);
  let enhanchers = compose;

  const isDev = process.env.NODE_ENV === 'development';
  const devtoolExtension =
    windowIfDefined && isDev && windowIfDefined.__REDUX_DEVTOOLS_EXTENSION__;

  if (isDev && windowIfDefined && devtoolExtension === 'function') {
    enhanchers = composeWithDevTools({
      //actionBlacklist:[]
    });
  }
  const rootReducer = combineReducers<RootState>({
    router: connectRouter(history),
    app: appReducer,
  });
  const store = createStore(
    rootReducer,
    {},
    enhanchers(applyMiddleware(...middleware))
  );
  saga.run(rootSaga);
  return { store };
}
