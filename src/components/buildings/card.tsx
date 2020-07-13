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
      <div className="card" onClick={this.props.isActive}>
        <div className={this.props.classNames.title}>
          <img src={this.props.img} alt={this.props.imgAlt} />
          <div className={this.props.classNames.title}>
            {this.props.title.split('\n').map((i, item) => (
              <p key={item}>{i}</p>
            ))}
          </div>
        </div>
        <div className={this.props.classNames.body}>
          {this.props.body}
        </div>
      </div>
    );
  }
}
