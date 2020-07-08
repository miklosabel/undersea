import React from 'react';

interface Props {}

export class Buildings extends React.Component<Props, {}> {
  render() {
    return (
      <div className="buildings">
        <h1>Épületek</h1>
        <p className="strong">Kattings rá, amelyiket szeretnéd megvenni</p>
        <p>Egyszerre csak egy épület épülhet</p>
        <div className="card-container">
          <div className="card">
            <img src="" alt="zatonyvar"/>
            <p className="strong">Zátonyvár</p>
            <p className="strong">50 embert ad a népességhez</p>
            <p className="strong">200 krumplit termel körönként</p>
            {/* <p>{this.props.status.buildings} db</p> */}
            <p>45 Gyöngy / db</p>
          </div>
          <div className="card">
            <img src="" alt="aramlasiranyito"/>
            <p className="strong">Áramlásirányító</p>
            <p className="strong">200 egység nyújt szállást</p>
            {/* <p>{this.props.status.buildings} db</p> */}
            <p>45 Gyöngy / db</p>
          </div>
        </div>
        <button>Megveszem</button>
      </div>
    );
  }
}
