import React from 'react';
import './card.scss';

interface Props {
  img: string;
  imgAlt: string;
  id: string;
  isActive: boolean;
  onClick?: (id: string) => void;
}

export class Card extends React.Component<Props, {}> {
  render() {
    return (
      <div
        className={`card ${this.props.isActive ? 'card-active' : ''}`}
        onClick={() => {
          if (this.props.onClick) {
            this.props.onClick(this.props.id);
          }
        }}
      >
        <img src={this.props.img} alt={this.props.imgAlt} />

        {this.props.children}
      </div>
    );
  }
}
