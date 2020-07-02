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
// TODO ez mit csinal? megmondja, hogy igy fog kinezni a store?
export function configStore(history: History) { // megkapja a history-t hogy a router ahhoz hozzaferjen
  const saga = createSagaMiddleware();
  const middleware = [saga, routerMiddleware(history)];

  const windowIfDefined =
    typeof window === 'undefined' ? null : (window as any);
  let enhanchers = compose;  // itt csak annyi a lenyeg, hogy ez egy compose objektum lesz

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
    rootReducer,  // reducer function
    {},  // preloadedState (initial state)
    enhanchers(applyMiddleware(...middleware))  // enhancer function which is a compose
  );
  // start saga
  saga.run(rootSaga);
  return { store };
}
