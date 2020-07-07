import React from 'react';
import './Main.scss';
import TowerImage from '../../components/towerImage/TowerImage';
import StatusBar from '../../components/statusBar/StatusBar';
import Sidebar from '../../components/sideBar/Sidebar';
import { MappedProps } from './connect';

interface Props extends MappedProps {}

export default class Main extends React.Component<Props, {}> {
  render() {
    return (
      <div className="main-container">
        <StatusBar
          round={this.props.status.round}
          rank={this.props.status.rank}
          shark={this.props.status.shark}
          seal={this.props.status.seal}
          seahorse={this.props.status.seahorse}
          shell={this.props.status.shell}
          shellIncome={this.props.status.shellIncome}
          coral={this.props.status.coral}
          coralIncome={this.props.status.coralIncome}
          buildings={this.props.status.buildings}
          isBuilding={this.props.status.isBuilding}
          upgrades={this.props.status.upgrades}
          isUpgrading={this.props.status.isUpgrading}
        />
        <div className="second-row">
          <Sidebar userName="jakabjatekos" />
          <div className="active-component">
            <TowerImage />
          </div>
        </div>
      </div>
    );
  }
}
