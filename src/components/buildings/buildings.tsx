import React from 'react';
import './buildings.scss';
import {
  COST_OF_ATOLLFORTRESS,
  COST_OF_FLOWCONTROLLER,
} from '../../mock/contants';
import atollFortressImage from '../../assets/atollfortress.png';
import flowControllerImage from '../../assets/flowcontroller.png';
import { Card } from '../card/card';

interface Props {
  atollFortress: number;
  flowController: number;
}

export class Buildings extends React.Component<Props, {}> {
  atollFortressProps = {
    atollFortressTitle:
      'Zátonyvár\n50 embert ad a népességhez\n200 krumplit termel körönként',
    atollFortressBody:
      this.props.atollFortress +
      ' db\n' +
      COST_OF_ATOLLFORTRESS +
      ' Gyöngy / db',
    classNames: {
      title: '',
      body: 'base-text',
      isActive: true,
    },
  };
  flowControllerProps = {
    flowControllerTitle: 'Áramlásirányító\n200 egységnek nyújt szállást',
    flowControllerBody:
      this.props.flowController +
      ' db\n' +
      COST_OF_FLOWCONTROLLER +
      ' Gyöngy / db',
    classNames: {
      title: '',
      body: 'base-text',
    },
  };

  // handleActiveCardClass(e: React.MouseEvent<HTMLElement>) {
  // }

  render() {
    return (
      <div className="buildings">
        <h1>Épületek</h1>
        <p>Kattings rá, amelyiket szeretnéd megvenni</p>
        <p>Egyszerre csak egy épület épülhet</p>
        <div>
          {/* {cardConst.map(x=>{ */}
        <Card
        // clicked={this.state.clikedTomb.include()}
            // img={x.img}
            img={atollFortressImage}
            imgAlt="zátonyvár"
            title={this.atollFortressProps.atollFortressTitle}
            body={this.atollFortressProps.atollFortressBody}
            classNames={this.atollFortressProps.classNames}
            onClick={x=>this.setState({})}
          >
            {/* <>
            <spna>alma</spna>
            </> */}
          </Card>
   
         {/* )} */}
       </div>
        <button className="submit-button">Megveszem</button>
      </div>
    );
  }
}
