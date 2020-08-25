import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserHistory } from 'history';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { AuthComponentConnected } from './page/auth/connect';
import { Register } from './page/register/Register';
import { registerUrlPath, loginUrlPath } from './urlpaths';

function App(props: { init: (isConnected: boolean) => void }) {
  useEffect(() => {
    //Kiolvassuk, volt-e bejelentkezve
    const isConnectedUnparsed = localStorage.getItem('isConnected');
    const isConnected = isConnectedUnparsed
      ? JSON.parse(isConnectedUnparsed)
      : false;
    //Ha nem volt false értékkel elküldjük action
    props.init(isConnected);
  });
  return (
    <div className="App">
      <Switch>
        {/* Mint másik fájlban, akár ki lehet url stringeket egy helyre szervezni */}
        <Route path={ registerUrlPath }>
          <Register></Register>
        </Route>
        <AuthComponentConnected />
        <Redirect from="*" to={loginUrlPath}></Redirect>
      </Switch>
    </div>
  );
}

export default App;
export const historyApp = createBrowserHistory();
