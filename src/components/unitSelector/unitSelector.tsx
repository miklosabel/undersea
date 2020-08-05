import React from 'react';
import Slider from '@material-ui/core/Slider';
import './unitSelector.scss';

// TODO props: adott egyseg mennyisege
interface Props {
  unitNum: number;
  img: string;
  imgAlt: string;
  id: string;
  body: string;
}
export class UnitSelector extends React.Component<Props, {}> {
  render() {
    return (
      <div className="unit-selector">
        <img src={this.props.img} alt={this.props.imgAlt} className="thumbnail-img"/>
        <div>
          <p>
            {this.props.body} {this.props.unitNum} példány
          </p>
          <Slider
            defaultValue={this.props.unitNum}
            // getAriaValueText={}
            area-labelledby="discrete-slider"
            step={1}
            min={0}
            max={this.props.unitNum}
          />
        </div>
      </div>
    );
  }
}
