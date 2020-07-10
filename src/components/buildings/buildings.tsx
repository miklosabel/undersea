import React from 'react';
import './buildings.scss';
import {
  COST_OF_ATOLLFORTRESS,
  COST_OF_FLOWCONTROLLER,
} from '../../mock/contants';
import atollFortressImage from '../../assets/atollfortress.png';
import flowController from '../../assets/flowcontroller.png';
import { Card } from './card';

interface Props {
  atollFortress: number;
  flowController: number;
}

export class Buildings extends React.Component<Props, {}> {
  atollTitle =
    'Zátonyvár\n50 embert ad a népességhez\n200 krumplit termel körönként';
  atollBody =
    this.props.atollFortress + ' db\n' + COST_OF_ATOLLFORTRESS + ' Gyöngy / db';
  classNames = {
    title: 'dolgok',
    body: 'base-text',
  };
  render() {
    return (
      <div className="buildings">
        <h1>Épületek</h1>
        <p>Kattings rá, amelyiket szeretnéd megvenni</p>
        <p className="base-text">Egyszerre csak egy épület épülhet</p>
        <div className="card-container">
          <Card
            img={atollFortressImage}
            imgAlt="zátonyvár"
            title={this.atollTitle}
            body={this.atollBody}
            classNames={this.classNames}
          />
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
