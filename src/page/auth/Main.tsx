import React from 'react';
import './Main.scss';
import TowerImage from '../../components/towerImage/TowerImage';
import StatusBar from '../../components/statusBar/StatusBar';
import Sidebar from '../../components/sideBar/Sidebar';

export default class Main extends React.Component<{}, {}> {
  render() {
    return (
      <div className="main-container">
        <StatusBar
          round={5}
          rank={5}
          shark={3}
          seal={2}
          seahorse={43}
          shell={112}
          shellIncome={20}
          coral={10}
          coralIncome={5}
          buildings={0}
          upgrades={0}
        />
        <Sidebar userName='jakabjatekos'/>
        <TowerImage />
      </div>
    );
  }
}
