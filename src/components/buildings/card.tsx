import React from 'react';
import './card.scss';

interface Props {
  img: string;
  imgAlt: string;
  title: string;
  body: string;
  classNames: {
    title: string;
    body: string;
  };
  onClick:(x:any)=>void
}

interface State {
  isActive: boolean;
}

export class Card extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isActive: false
    }
  }
  handleClick() {
    return !this.state.isActive;
  }
  render() {
    return (
      <div
        className={`card ${this.state.isActive ? "card-active" : ""}`}
        onClick={() => {
          // this.setState({
          //   ...this.state,
          //   isActive: !this.state.isActive,
          // })
          // return this.props.onclick(x)
        }}
      >
        <div className={this.props.classNames.title}>
          <img src={this.props.img} alt={this.props.imgAlt} />
          <div className={this.props.classNames.title}>
            {this.props.title.split('\n').map((i, item) => (
              <p key={item}>{i}</p>
            ))}
          </div>
          {this.props.children}
        </div>
        <div className={this.props.classNames.body}>{this.props.body}</div>
      </div>
    );
  }
}
