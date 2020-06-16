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
        {/* two ways of creating a route */}
        <Route path="/login" children={<Login></Login>}></Route>
        <Route path="/register">
          <Register></Register>
        </Route>
        {/* default route to login */}
        <Redirect to="/login" from="*"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
