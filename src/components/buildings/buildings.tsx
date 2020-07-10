import React from 'react';
import './buildings.scss';
import {
  COST_OF_ATOLLFORTRESS,
  COST_OF_FLOWCONTROLLER,
} from '../../mock/contants';
import atollFortressImage from '../../assets/atollfortress.png';
import flowController from '../../assets/flowcontroller.png';

interface Props {
  atollFortress: number;
  flowController: number;
}

export class Buildings extends React.Component<Props, {}> {
  render() {
    return (
      <div className="buildings">
        <h1>Épületek</h1>
        <p>Kattings rá, amelyiket szeretnéd megvenni</p>
        <p className="base-text">Egyszerre csak egy épület épülhet</p>
        <div className="card-container">
          <div className="card">
            <div>
              <img src={atollFortressImage} alt="zatonyvar" />
              <p>Zátonyvár</p>
              <p>50 embert ad a népességhez</p>
              <p>200 krumplit termel körönként</p>
            </div>
            <div>
              <p className="base-text">{this.props.atollFortress} db</p>
              <p className="base-text">{COST_OF_ATOLLFORTRESS} Gyöngy / db</p>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={flowController} alt="aramlasiranyito" />
              <p>Áramlásirányító</p>
              <p>200 egységnek nyújt szállást</p>
            </div>
            <div>
              <p className="base-text">{this.props.flowController} db</p>
              <p className="base-text">{COST_OF_FLOWCONTROLLER} Gyöngy / db</p>
            </div>
          </div>
        </div>
        <button className="submit-button">Megveszem</button>
      </div>
    );
  }
}
