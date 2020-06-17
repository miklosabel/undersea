import React, { useState } from 'react';
import './App.scss';
import './styles/general.scss';
import { Switch, Route, Redirect } from 'react-router';
import { createBrowserHistory } from 'history';
import Login from './page/login/Login';
import { Register } from './page/register/Register';
import AuthComponent from './page/auth/Auth';

function App() {
  const [msg, setMsg] = useState<string>('');
  return (
    <div className="App">
      <Switch>
        {/* two ways of creating a route */}
        <Route path="/login" children={<Login errorMsg={msg}></Login>}></Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/auth">
          <AuthComponent loginMsg={(tempMsg) => {setMsg(tempMsg)}}></AuthComponent>
        </Route>
        {/* default route to login */}
        <Redirect to="/login" from="*"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
export const historyApp = createBrowserHistory();
