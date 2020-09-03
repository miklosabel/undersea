import { MappedProps } from './connect';
import React from 'react';
interface Props extends MappedProps {}

export function Battle(props: Props) {
  return (
    <div className="battleList">
      <h1>Harc</h1>
      <ul>
        {props.attackingArmyList.map((item, index) => (
          <li key={index}>
            {
              <div>
                <div>
                  <p>{item.target}</p>
                </div>
                <div>
                  <p>{item.sharkArmy}</p>
                  <p>{item.sealArmy}</p>
                  <p>{item.seahorseArmy}</p>
                </div>
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
