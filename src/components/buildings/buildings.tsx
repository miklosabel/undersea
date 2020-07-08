import React from 'react';
import {
  COST_OF_ATOLLFORTRESS,
  COST_OF_FLOWCONTROLLER,
} from '../../mock/contants';

interface Props {
  atollFortress: number;
  flowController: number;
}

export class Buildings extends React.Component<Props, {}> {
  render() {
    return (
      <div className="buildings">
        <h1>Épületek</h1>
        <p className="strong">Kattings rá, amelyiket szeretnéd megvenni</p>
        <p>Egyszerre csakegy épület épülhet</p>
        <div className="card-container">
          <div className="card">
            <img src="" alt="zatonyvar" />
            <p className="strong">Zátonyvár</p>
            <p className="strong">50 embert ad a népességhez</p>
            <p className="strong">200 krumplit termel körönként</p>
            <p>{this.props.atollFortress} db</p>
            <p>{COST_OF_ATOLLFORTRESS} Gyöngy / db</p>
          </div>
          <div className="card">
            <img src="" alt="aramlasiranyito" />
            <p className="strong">Áramlásirányító</p>
            <p className="strong">200 egységneks nyújt szállást</p>
            <p>{this.props.flowController} db</p>
            <p>{COST_OF_FLOWCONTROLLER} Gyöngy / db</p>
          </div>
        </div>
        <button>Megveszem</button>
      </div>
    );
  }
}
