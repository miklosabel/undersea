import React from "react";
import Slider from '@material-ui/core/Slider'

// TODO props: adott egyseg mennyisege
interface Props {
  unitNum: number;
}
export class UnitSelector extends React.Component<Props, {}>{

  render() {
    return(
      <div className="unit-selector">
        <img src="" alt=""/>
        <p>példány</p>
        <Slider 
          defaultValue={this.props.unitNum}
          // getAriaValueText={}
          area-labelledby="discrete-slider"
          step={1}
          min={0}
          max={this.props.unitNum}
          />
      </div>
    )
  }
}
