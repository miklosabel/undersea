import './Sidebar.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProfileImg from '../../assets/default_profile_image.png';
import { mainUrlPath, attacksUrlPath, buildingsUrlPath, battleUrlPath } from '../../urlpaths';

interface Props {
  userName: string;
  resetApp: () => void;
}

export class Sidebar extends Component<Props, {}> {
  render() {
    return (
      <div className="sidebar">
        <div className="links">
          <Link to={buildingsUrlPath}>Épületek</Link>
          <Link to={attacksUrlPath}>Támadás</Link>
          <Link to={battleUrlPath}>Harc </Link>
          <Link to={mainUrlPath}>Ranglista</Link>
          <Link to={mainUrlPath}>Sereg</Link>
        </div>
        <div className="usermenu">
          <img src={ProfileImg} alt="profile" />
          <p>{this.props.userName}</p>
          <Link to={mainUrlPath}>Profil</Link>
          <p onClick={() => this.props.resetApp()}>Kijelentkezés</p>
        </div>
        <div className="sidebar-footer">
          <span></span>
          <h1>undersea</h1>
        </div>
      </div>
    );
  }
}

export default Sidebar;
