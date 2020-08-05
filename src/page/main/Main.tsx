import React from 'react';
import './Main.scss';
import TowerImage from '../../components/towerImage/TowerImage';
import { StatusBarConnected } from '../../components/statusBar/connect';
import Sidebar from '../../components/sideBar/Sidebar';
import { MappedProps } from './connect';
import { Route, Switch } from 'react-router-dom';
import { BuildingsConnected } from '../../components/buildings/connect';
import {Attacks} from '../../components/attack/attack';

interface Props extends MappedProps {}
interface State {
  defaultPage: boolean;
}

export default class Main extends React.Component<Props, State> {
  render() {
    return (
      <div className="main-container">
        <StatusBarConnected />
        <div className="second-row">
          <Sidebar userName="jakabjatekos" />
          <div className="active-component">
            <Switch>
              <Route exact path="/main">
                <TowerImage />
              </Route>
              <Route exact path="/main/buildings">
                <BuildingsConnected />
              </Route>
              <Route exact path="/main/attack">
                <Attacks />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
