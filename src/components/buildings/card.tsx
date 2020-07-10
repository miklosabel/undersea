import React from 'react';

interface Props {
  img: string;
  imgAlt: string;
  title: string;
  body: string;
  classNames: {
    title: string;
    body: string;
  };
}

export class Card extends React.Component<Props, {}> {
  render() {
    return (
      <div className="card">
        <div className={this.props.classNames.title}>
          <img src={this.props.img} alt={this.props.imgAlt} />
          {/* {this.props.title} */}
          <div className={this.props.classNames.title}>
            {this.props.title.split('\n').map((i, item) => (
              <p key={item}>{i}</p>
            ))}
          </div>
          {/* <p>Zátonyvár</p>
              <p>50 embert ad a népességhez</p>k
              <p>200 krumplit termel körönként</p> */}
        </div>
        <div className={this.props.classNames.body}>
          {this.props.body}
          {/* <p className={this.props.classNames.baseText}>{this.props.atollFortress} db</p> */}
          {/* <p className="base-text">{COST_OF_ATOLLFORTRESS} Gyöngy / db</p> */}
        </div>
      </div>
    );
  }
}
