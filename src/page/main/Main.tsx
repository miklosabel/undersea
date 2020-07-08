import React from 'react';
import './Main.scss';
import TowerImage from '../../components/towerImage/TowerImage';
import StatusBar from '../../components/statusBar/StatusBar';
import Sidebar from '../../components/sideBar/Sidebar';
import { MappedProps } from './connect';

interface Props extends MappedProps {}

export default class Main extends React.Component<Props, {}> {
  render() {
    console.log(this.props);
    return (
      <div className="main-container">
        <StatusBar {...this.props.status}/>
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
