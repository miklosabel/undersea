import React from 'react';
import './Main.scss';
import TowerImage from '../../components/towerImage/TowerImage';
import { StatusBarConnected } from '../../components/statusBar/connect';
import { SidebarConnected } from '../../components/sideBar/connect';
import { MappedProps } from './connect';
import { Route, Switch } from 'react-router-dom';
import { BuildingsConnected } from '../../components/buildings/connect';
import { AttacksConnected } from '../../components/attack/connect';
import { BattleConnected } from '../../components/battle/connect';
import {
  mainUrlPath,
  buildingsUrlPath,
  attacksUrlPath,
  battleUrlPath,
} from '../../urlpaths';

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
          <SidebarConnected userName="jakabjatekos" />
          <div className="active-component">
            <Switch>
              <Route exact path={mainUrlPath}>
                <TowerImage />
              </Route>
              <Route exact path={buildingsUrlPath}>
                <BuildingsConnected />
              </Route>
              <Route exact path={attacksUrlPath}>
                <AttacksConnected />
              </Route>
              <Route exact path={battleUrlPath}>
                <BattleConnected />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
