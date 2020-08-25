import React from 'react';
import Slider from '@material-ui/core/Slider';
import './unitSelector.scss';

interface Props {
  maxUnit: number;
  img: string;
  imgAlt: string;
  id: string;
  body: string;
  value: number;
  getSliderValue: (sliderValue: number) => void;
}

export function UnitSelector(props: Props) {
  const handleChange = (event: React.ChangeEvent<{}>, value: number): void => {
    props.getSliderValue(value);
  };

  return (
    <div className="unit-selector">
      <img src={props.img} alt={props.imgAlt} className="thumbnail-img" />
      <div>
        <p>
          {props.body} {props.value} példány
        </p>
        <Slider
          value={props.value}
          onChange={(event, value) =>
            handleChange(
              event,
              typeof value === 'number' ? value : props.value
            )
          }
          area-labelledby="discrete-slider"
          step={1}
          min={0}
          max={props.maxUnit}
          className='slider'
        />
      </div>
    </div>
  );
}