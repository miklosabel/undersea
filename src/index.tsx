import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { configStore } from './config/config-store';
import { AppConnected } from './connect';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory({ basename: '/' });
const { store } = configStore(history);

ReactDOM.render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <AppConnected />
      </React.StrictMode>
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// Ha kész vagy akár kirakhatjuk valami public domainre, és akkor ezt át lehet írni
serviceWorker.unregister();
