import React from 'react';
import { UnitSelector } from '../unitSelector/unitSelector';
import './attack.scss';
import {
  unitSelectors as unitSelectorsConst,
  attackUserList,
} from '../../mock/contants';
import { List } from '../list/List';
import {
  displayListElement,
  unitSelectorInterface,
} from '../../mock/interface';

interface State {
  inputContent: string;
  activeListItemId?: number;
  userList: displayListElement[];
  unitSelectors: unitSelectorInterface[];
}

export class Attacks extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputContent: '',
      activeListItemId: undefined,
      userList: attackUserList,
      unitSelectors: unitSelectorsConst.map((x) => ({ ...x, value: 190 })),
    };
  }

  findUsernameInList(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(this.state.userList);
    const userList = attackUserList.filter((x) =>
      x.item.includes(event.target.value)
    );
    this.setState({ ...this.state, userList });
  }

  setActiveIdInList(listItemId: number) {
    this.setState({
      ...this.state,
      activeListItemId:
        this.state.activeListItemId === listItemId ? undefined : listItemId,
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(this.state.unitSelectors);
  }

  updateUnitSelector(id: string, sliderValue: number): void {
    this.setState({
      ...this.state,
      unitSelectors: this.state.unitSelectors.map((x) =>
        x.id === id ? { ...x, value: sliderValue } : x
      ),
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
                  // TODO this will be from store, actual amount of units
                  maxUnit={190}
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
        <button className="submit-button">Megtámadom</button>
      </form>
    );
  }
}
