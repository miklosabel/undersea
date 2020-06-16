import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router';
import { Login } from './page/login/Login'
import { Register } from './page/register/Register'
import { AuthComponent } from './page/auth/component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" children={<Login></Login>}></Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <AuthComponent></AuthComponent>
        <Redirect to="/login" from="*"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
