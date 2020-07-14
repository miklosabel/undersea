import React from 'react';
import './buildings.scss';
import { buildings } from '../../mock/contants';
import { Card } from '../card/card';

interface State {
  selectedBuilding: string;
}

export class Buildings extends React.Component<{}, State> {
  state:State={
    selectedBuilding:''
  
  }
  validate() {}
  render() {
    return (
      <form className="buildings" onSubmit={() => this.validate()}>
        <h1>Épületek</h1>
        <p>Kattings rá, amelyiket szeretnéd megvenni</p>
        <p>Egyszerre csak egy épület épülhet</p>
        <div>
          {buildings.map((item) => (
            <React.Fragment key={item.body}>
              <Card
                isActive={item.id === this.state.selectedBuilding}
                id={item.id}
                img={item.image}
                imgAlt={item.imageAlt}
                onClick={(id) => {
                  this.setState({
                    ...this.state,
                    selectedBuilding: id,
                  });
                }}
              >
                <>
                  <div>
                    {Object.keys(item.title).map((i, index) => (
                      <p key={i}>{item.title[i]}</p>
                    ))}
                  </div>
                  <div>{item.body}</div>
                </>
              </Card>
            </React.Fragment>
          ))}
        </div>
        <button disabled className="submit-button" type="submit">
          Megveszem
        </button>
      </form>
    );
  }
}
