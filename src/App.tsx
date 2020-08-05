import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './styles/general.scss';
import { Switch, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import { Register } from './page/register/Register';
import { LoginConnected } from './page/login/connect';
import { AuthComponentConnected } from './page/auth/connect';

function App() {
  const [msg, setMsg] = useState<string>('');
  return (
    <div className="App">
      <Switch>
        {/* two ways of creating a route */}
        <Route path="/login" children={<LoginConnected errorMsg={msg}></LoginConnected>}></Route>
        <Route path="/register">
          <Register></Register>
        </Route>

        {/* TODO make this route private */}
        <AuthComponentConnected
          loginMsg={(tempMsg) => {
            setMsg(tempMsg);
          }}
        />
        {/* default route to login */}
        <Redirect to="/login" from="*" />
      </Switch>
    </div>
  );
}

export default App;
export const historyApp = createBrowserHistory();
