import React from 'react';
import './StatusBar.scss';
import SealPng from '../../assets/seal.png';
import SharkPng from '../../assets/shark.png';
import CoralPng from '../../assets/coral.png';
import ShellPng from '../../assets/shell.png';
import SeahorsePng from '../../assets/seahorse.png';
import BuildingsPng from '../../assets/buildings.png';
import UpgradesPng from '../../assets/upgrades.png';
import { MappedProps } from '../../page/main/connect';

// export interface Props {
//     round: number;
//     rank: number;
//     shark: number;
//     seal: number;
//     seahorse: number;
//     shell: number;
//     shellIncome: number;
//     coral: number;
//     coralIncome: number;
//     atollFortress: number;
//     isAtollFortressBuilding: boolean;
//     flowController: number;
//     isFlowControllerBuilding: boolean;
// }

interface Props extends MappedProps {}

export default class StatusBar extends React.Component<Props, {}> {
  render() {
    return (
      <div className="statusbar">
        <p>{this.props.status.round}. kör</p>
        <p>{this.props.status.rank}. hely</p>
        <div className="counter">
          <img src={SharkPng} alt="shark" className="thumbnail-img"/>
          <p>{this.props.status.shark}</p>
        </div>
        <div className="counter">
          <img src={SealPng} alt="seal" className="thumbnail-img"/>
          <p>{this.props.status.seal}</p>
        </div>
        <div className="counter">
          <img src={SeahorsePng} alt="seahorse"className="thumbnail-img" />
          <p>{this.props.status.seahorse}</p>
        </div>
        <div className="counter">
          <img src={ShellPng} alt="shell"className="thumbnail-img" />
          <div>
            <p>{this.props.status.shell}</p>
            <p>{this.props.status.shellIncome}/kör</p>
          </div>
        </div>
        <div className="counter">
          <img src={CoralPng} alt="coral"className="thumbnail-img" />
          <div>
            <p>{this.props.status.coral}</p>
            <p>{this.props.status.coralIncome}/kör</p>
          </div>
        </div>
        <div className="counter">
          <img src={BuildingsPng} alt="buildings"className="thumbnail-img" />
          <div>
            <p>{this.props.status.atollFortress}</p>
            {this.props.status.isAtollFortressBuilding ? <p>1 épül</p> : <p>0 épül</p>}
          </div>
        </div>
        <div className="counter">
          <img src={UpgradesPng} alt="upgrades"className="thumbnail-img" />
          <div>
            <p>{this.props.status.flowController}</p>
            {this.props.status.isFlowControllerBuilding ? <p>1 épül</p> : <p>0 épül</p>}
          </div>
        </div>
      </div>
    );
  }
}
