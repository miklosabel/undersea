import React from 'react';
import './StatusBar.scss';
import SealPng from '../../assets/seal.png';
import SharkPng from '../../assets/shark.png';
import CoralPng from '../../assets/coral.png';
import ShellPng from '../../assets/shell.png';
import SeahorsePng from '../../assets/seahorse.png';
import BuildingsPng from '../../assets/buildings.png';
import UpgradesPng from '../../assets/upgrades.png';

// interface Props {
//   round?: number;
//   rank?: number;
//   shark?: number;
//   seal?: number;
//   seahorse?: number;
//   shell?: number;
//   shellIncome?: number;
//   coral?: number;
//   coralIncome?: number;
//   atollFortress?: number;
//   isAtollFortressBuilding?: boolean;
//   flowController?: number;
//   isFlowControllerBuilding?: boolean;
// }
export interface Props {
    round: number;
    rank: number;
    shark: number;
    seal: number;
    seahorse: number;
    shell: number;
    shellIncome: number;
    coral: number;
    coralIncome: number;
    atollFortress: number;
    isAtollFortressBuilding: boolean;
    flowController: number;
    isFlowControllerBuilding: boolean;
}

export default class StatusBar extends React.Component<Props, {}> {
  render() {
    return (
      <div className="statusbar">
        <p>{this.props.round}. kör</p>
        <p>{this.props.rank}. hely</p>
        <div className="counter">
          <img src={SharkPng} alt="shark" />
          <p>{this.props.shark}</p>
        </div>
        <div className="counter">
          <img src={SealPng} alt="seal" />
          <p>{this.props.seal}</p>
        </div>
        <div className="counter">
          <img src={SeahorsePng} alt="seahorse" />
          <p>{this.props.seahorse}</p>
        </div>
        <div className="counter">
          <img src={ShellPng} alt="shell" />
          <div>
            <p>{this.props.shell}</p>
            <p>{this.props.shellIncome}/kör</p>
          </div>
        </div>
        <div className="counter">
          <img src={CoralPng} alt="coral" />
          <div>
            <p>{this.props.coral}</p>
            <p>{this.props.coralIncome}/kör</p>
          </div>
        </div>
        <div className="counter">
          <img src={BuildingsPng} alt="buildings" />
          <div>
            <p>{this.props.atollFortress}</p>
            {this.props.isAtollFortressBuilding ? <p>1 épül</p> : <p>0 épül</p>}
          </div>
        </div>
        <div className="counter">
          <img src={UpgradesPng} alt="upgrades" />
          <div>
            <p>{this.props.flowController}</p>
            {this.props.isFlowControllerBuilding ? <p>1 épül</p> : <p>0 épül</p>}
          </div>
        </div>
      </div>
    );
  }
}
