import React from 'react';
import { UnitSelector } from '../unitSelector/unitSelector';
import './attack.scss';
import { unitSelectors } from '../../mock/contants';


export class Attacks extends React.Component<{}, {}> {
  handleSubmit(event: React.FormEvent<HTMLFormElement>) {}
  render() {
    return (
        <form className="attacks" onSubmit={(event) => this.handleSubmit(event)}>
        <h1>Támadás</h1>
          <div>
            <div>
              <p>1. Jelöld ki, kit szeretnél megtámadni</p>
              {/* component to find enemy */}
            </div>
            <div>
              <p>2. Állítsd be, kiket küldesz harcba</p>
              {/* 3 stateless components */}
              {/* <UnitSelector unitNum={6} /> */}
              {unitSelectors.map((unitSelector) => (
                <React.Fragment key={unitSelector.body}>
                  <UnitSelector
                  id={unitSelector.id}
                  body={unitSelector.body}
                  unitNum={6}
                  img={unitSelector.image}
                  imgAlt={unitSelector.imgAlt}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* TODO a line here */}
          <button className="submit-button">Megtámadom</button>
        </form>
    );
  }
}
