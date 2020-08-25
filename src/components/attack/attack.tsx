import React from 'react';
import { UnitSelector } from '../unitSelector/unitSelector';
import './attack.scss';
import {
  unitSelectors as unitSelectorsConst,
  attackUserList,
} from '../../mock/constants';
import { List } from '../list/List';
import {
  displayListElement,
  unitSelectorInterface,
} from '../../mock/interface';
import { MappedProps, DispatchProps } from './connect';

interface State {
  isButtonDisabled: boolean;
  inputContent: string;
  activeListItemId?: number;
  userList: displayListElement[];
  unitSelectors: unitSelectorInterface[];
}

interface Props extends MappedProps, DispatchProps {}

const initialState = {
  isButtonDisabled: true,
  inputContent: '',
  activeListItemId: undefined,
  userList: attackUserList,
  unitSelectors: unitSelectorsConst,
};

export class Attacks extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  findUsernameInList(event: React.ChangeEvent<HTMLInputElement>) {
    const userList = attackUserList.filter((x) =>
      x.item.includes(event.target.value)
    );
    this.setState({ ...this.state, userList });
  }

  setActiveIdInList(listItemId: number) {
    const activeId =
      this.state.activeListItemId === listItemId ? undefined : listItemId;

    this.setState({
      ...this.state,
      activeListItemId: activeId,
      isButtonDisabled: this.setButtonDisabled({ activeId }),
    });
  }

  setButtonDisabled({
    selectedUnitsCount = this.state.unitSelectors
      .map((obj) => obj.value)
      .reduce((a, b) => a + b),
    activeId = undefined,
  }: {
    selectedUnitsCount?: number;
    activeId: number | undefined;
  }): boolean {
    return selectedUnitsCount === 0 || activeId === undefined;
  }

  /*
    to update unitselector value in the state
  */
  updateUnitSelector(id: string, sliderValue: number): void {
    var selectedUnitsCount = 0;
    this.state.unitSelectors.map((x) =>
      x.id === id
        ? (selectedUnitsCount += sliderValue)
        : (selectedUnitsCount += x.value)
    );

    this.setState({
      ...this.state,
      unitSelectors: this.state.unitSelectors.map((x) =>
        x.id === id ? { ...x, value: sliderValue } : x
      ),
      isButtonDisabled: this.setButtonDisabled({
        selectedUnitsCount,
        activeId: this.state.activeListItemId,
      }),
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const sharkArmy = this.state.unitSelectors.filter(
      (x) => x.id === 'shark'
    )[0].value;
    const sealArmy = this.state.unitSelectors.filter((x) => x.id === 'seal')[0]
      .value;
    const seahorseArmy = this.state.unitSelectors.filter(
      (x) => x.id === 'seahorse'
    )[0].value;
    this.props.sendAttack({
      shark: this.props.units.shark - sharkArmy,
      seal: this.props.units.seal - sealArmy,
      seahorse: this.props.units.seahorse - seahorseArmy,
      attackingArmyList: [
        ...this.props.attackingArmyList,
        {
          target:
            this.state.activeListItemId === undefined
              ? ''
              : this.state.userList[this.state.activeListItemId].item,
          sharkArmy,
          sealArmy,
          seahorseArmy,
        },
      ],
    });
    this.setState({
      ...initialState,
    });
  }

  updateState() {
    this.state.activeListItemId === undefined &&
      this.setState({
        ...this.state,
        isButtonDisabled: true,
      });
  }

  render() {
    return (
      <form className="attacks" onSubmit={(event) => this.handleSubmit(event)}>
        <h1>Támadás</h1>
        <div>
          <div>
            <p>1. Jelöld ki, kit szeretnél megtámadni</p>
            <input
              type="text"
              placeholder="Felhasználónév"
              onChange={(event) => this.findUsernameInList(event)}
            />

            <List
              setActiveId={(id) => {
                this.setActiveIdInList(id);
              }}
              activeId={this.state.activeListItemId}
              findUser={this.state.inputContent}
              displayList={this.state.userList}
            />
          </div>
          <div>
            <p>2. Állítsd be, kiket küldesz harcba</p>
            {this.state.unitSelectors.map((unitSelector) => (
              <React.Fragment key={unitSelector.body}>
                <UnitSelector
                  id={unitSelector.id}
                  body={unitSelector.body}
                  maxUnit={(this.props.units as any)[unitSelector.id]}
                  value={unitSelector.value}
                  img={unitSelector.image}
                  imgAlt={unitSelector.imgAlt}
                  getSliderValue={(sliderValue) =>
                    this.updateUnitSelector(unitSelector.id, sliderValue)
                  }
                />
              </React.Fragment>
            ))}
          </div>
        </div>
        <button
          disabled={this.state.isButtonDisabled}
          className="submit-button"
          type="submit"
        >
          Megtámadom
        </button>
      </form>
    );
  }
}
