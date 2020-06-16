import React from 'react';
import './App.scss';
import './styles/general.scss'
import { Switch, Route, Redirect } from 'react-router';
import { Login } from './page/login/Login'
import { Register } from './page/register/Register'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" children={<Login></Login>}></Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Redirect to="/login" from="*"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
