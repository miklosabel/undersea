import React from 'react';
import './Main.scss';
import TowerImage from '../../components/towerImage/TowerImage';
import StatusBar from '../../components/statusBar/StatusBar';
import Sidebar from '../../components/sideBar/Sidebar';
import { MappedProps } from './connect';
import { Route, Switch } from 'react-router-dom';
import { BuildingsConnected } from '../../components/buildings/connect';

interface Props extends MappedProps {}
interface State {
  defaultPage: boolean;
}

export default class Main extends React.Component<Props, State> {
  render() {
    return (
      <div className="main-container">
        <StatusBar {...this.props.status} />
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
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
