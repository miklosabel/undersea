import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './styles/general.scss';
import { Switch, Route, Redirect, } from 'react-router';
import { createBrowserHistory } from 'history';
import { Register } from './page/register/Register';
import { AuthComponentConnected } from './page/auth/connect';

function App(props: { init: (isConnected: boolean) => void }) {

  useEffect(() => {
    //Kiolvassuk, volt-e bejelentkezve
    const isConnectedUnparsed = localStorage.getItem('isConnected')
    const isConnected = isConnectedUnparsed ? JSON.parse(isConnectedUnparsed) : false
    //Ha nem volt false értékkel elküldjük action
    props.init(isConnected)

  })
  return (
    <div className="App">
      <Switch>
        <Route path="/register">
          <Register></Register>
        </Route>
        AuthComponentConnected
        />
        <Redirect from="*" to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
export const historyApp = createBrowserHistory();
