import React, { useState } from 'react';
import './App.scss';
import './styles/general.scss';
import { Switch, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import AuthComponent from './page/auth/Auth';
import { Register } from './page/register/Register';
import Main from './page/auth/Main';
import { LoginConnected } from './page/login/connect';

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
        <Route path="/auth">
          <AuthComponent
            loginMsg={(tempMsg) => {
              setMsg(tempMsg);
            }}
          />
        </Route>
        {/* TODO make this route private */}
        <Route path="/main" component={Main} />
        {/* default route to login */}
        <Redirect to="/login" from="*" />
      </Switch>
    </div>
  );
}

export default App;
export const historyApp = createBrowserHistory();
