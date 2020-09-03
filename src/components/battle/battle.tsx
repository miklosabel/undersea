import React from 'react';
import './battle.scss';
import { MappedProps } from './connect';
interface Props extends MappedProps {}

export function Battle(props: Props) {
  return (
    <div className="battle-list">
      <h1>Harc</h1>
      {Array.isArray(props.attackingArmyList) &&
      props.attackingArmyList.length ? (
        <div>
          <ul>
            {props.attackingArmyList.map((item, index) => (
              <li key={index}>
                <p>{item.target}</p>
                <div>
                  <div>{item.sharkArmy} Lézercápa</div>
                  <div>{item.sealArmy} Rohamfóka</div>
                  <div>{item.seahorseArmy} Csatacsikó</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Épp nem támadsz senkit...</div>
      )}
    </div>
  );
}
