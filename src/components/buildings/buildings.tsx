import React from 'react';
import './buildings.scss';
import {
  buildings,
  COST_OF_ATOLLFORTRESS,
  COST_OF_FLOWCONTROLLER,
} from '../../mock/contants';
import { Card } from '../card/card';
import { MappedProps, DispatchProps } from './connect';

interface State {
  selectedBuilding: string;
  isButtonDisabled: boolean;
}
interface Props extends MappedProps, DispatchProps {}

export class Buildings extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedBuilding: '',
      isButtonDisabled: true,
    };
  }

  validate(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    console.log('validated');
  }

  /* calculates:
    if any card should be active
    if submit button should be active with respect to the cost of the building
  */
  updateState(id: string) {
    const selectedBuilding = this.state.selectedBuilding === id ? '' : id;
    var cost = Number.POSITIVE_INFINITY;
    if (selectedBuilding) {
      // in that case that check is enough couse we have 2 possible cards
      cost =
        id === 'atollFortress' ? COST_OF_ATOLLFORTRESS : COST_OF_FLOWCONTROLLER;
    }
    this.setState({
      ...this.state,
      selectedBuilding: selectedBuilding,
      isButtonDisabled: this.props.shell <= cost,
    });
  }

  render() {
    return (
      <form className="buildings" onSubmit={(event) => this.validate(event)}>
        <h1>Épületek</h1>
        <p>Kattings rá, amelyiket szeretnéd megvenni</p>
        <p>Egyszerre csak egy épület épülhet</p>
        <div>
          {buildings.map((building) => (
            <React.Fragment key={building.body}>
              <Card
                isActive={building.id === this.state.selectedBuilding}
                id={building.id}
                img={building.image}
                imgAlt={building.imageAlt}
                onClick={(id) => {
                  this.updateState(id);
                }}
              >
                <>
                  <div>
                    {Object.keys(building.title).map((i, index) => (
                      <p key={i}>{building.title[i]}</p>
                    ))}
                  </div>
                  <div>{building.body}</div>
                </>
              </Card>
            </React.Fragment>
          ))}
        </div>
        <button
          disabled={this.state.isButtonDisabled}
          className="submit-button"
          type="submit"
        >
          Megveszem
        </button>
      </form>
    );
  }
}
