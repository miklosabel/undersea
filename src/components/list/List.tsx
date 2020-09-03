import React from 'react';
import './List.scss';
import { DisplayListElement } from '../../mock/interface';

interface Props {
  findUser: string;
  activeId?: number;
  setActiveId: (id: number) => void;
  displayList: DisplayListElement[];
}

export class List extends React.Component<Props, {}> {
  render() {
    return (
      <div className="target-list">
        <ul>
          {this.props.displayList.map((listItem) => (
            <li
              className={`${
                this.props.activeId === listItem.id ? 'li-active' : ''
              }`}
              key={listItem.id}
              value={listItem.item}
              onClick={() => this.props.setActiveId(listItem.id)}
            >
              {listItem.item}
              </li>
          ))}
        </ul>
      </div>
    );
  }
}
