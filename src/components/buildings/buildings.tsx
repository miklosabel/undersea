import React from 'react';
import './buildings.scss';
import {
  buildings,
  COST_OF_ATOLLFORTRESS,
  COST_OF_FLOWCONTROLLER,
  ROUNDS_OF_BUILDING,
} from '../../mock/contants';
import { Card } from '../card/card';
import { MappedProps, DispatchProps } from './connect';

interface State {
  selectedBuilding: string;
  isButtonDisabled: boolean;
  currentCost: number;
}
interface Props extends MappedProps, DispatchProps {}

const initialState = {
  selectedBuilding: '',
  isButtonDisabled: true,
  currentCost: Number.POSITIVE_INFINITY,
};

export class Buildings extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    // firing an action to set redux state
    this.props.startBuild({
      shell: this.props.shell - this.state.currentCost,
      isAtollFortressBuilding: this.state.selectedBuilding === 'atollFortress',
      isFlowControllerBuilding:
        this.state.selectedBuilding === 'flowController',
      roundsBeforeNewBuilding: ROUNDS_OF_BUILDING,
    });
    // reseting state to initial
    this.setState(initialState);
  }

  /* card prop function
  calculates:
    if any card should be active
    if submit button should be active with respect to the cost of the building
  */
  updateState(id: string) {
    const selectedBuilding = this.state.selectedBuilding === id ? '' : id;
    var cost = Number.POSITIVE_INFINITY;
    if (selectedBuilding) {
      // in that case this check is enough couse we have 2 possible cards
      cost =
        id === 'atollFortress' ? COST_OF_ATOLLFORTRESS : COST_OF_FLOWCONTROLLER;
    }

    this.setState({
      ...this.state,
      selectedBuilding: selectedBuilding,
      isButtonDisabled:
        this.props.shell <= cost ||
        this.props.isFlowControllerBuilding ||
        this.props.isAtollFortressBuilding ||
        this.props.roundsBeforeNewBuilding > 0,
      currentCost: cost,
    });
  }

  render() {
    return (
      <form
        className="buildings"
        onSubmit={(event) => this.handleSubmit(event)}
      >
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
                    <div>{building.id === 'atollFortress'?this.props.atollFortress:this.props.flowController} {building.body}</div>
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
