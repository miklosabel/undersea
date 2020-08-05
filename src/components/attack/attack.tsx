import React, { FormEvent, KeyboardEvent } from 'react';
import { UnitSelector } from '../unitSelector/unitSelector';
import './attack.scss';
import { unitSelectors, attackUserList } from '../../mock/contants';
import { List } from '../list/List';
import { displayListElement } from '../../mock/interface';

interface State {
  inputContent: string;
  activeListItemId?: number;
  userList: displayListElement[];
}

export class Attacks extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputContent: '',
      activeListItemId: undefined,
      userList: attackUserList,
    };
  }

  findUsernameInList(event: React.ChangeEvent<HTMLInputElement>) {
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
            {unitSelectors.map((unitSelector) => (
              <React.Fragment key={unitSelector.body}>
                <UnitSelector
                  id={unitSelector.id}
                  body={unitSelector.body}
                  unitNum={6}
                  img={unitSelector.image}
                  imgAlt={unitSelector.imgAlt}
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
