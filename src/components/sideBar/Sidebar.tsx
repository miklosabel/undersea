import './Sidebar.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProfileImg from '../../assets/default_profile_image.png';

interface Props {
  userName: string;
  resetApp: () => void;
}

export class Sidebar extends Component<Props, {}> {
  render() {
    return (
      <div className="sidebar">
        <div className="links">
          <Link to="/main/buildings">Épületek</Link>
          <Link to="/main/attack">Támadás</Link>
          <Link to="/main">Harc </Link>
          <Link to="/main">Ranglista</Link>
          <Link to="/main">Sereg</Link>
        </div>
        <div className="usermenu">
          <img src={ProfileImg} alt="profile" />
          <p>{this.props.userName}</p>
          <Link to="/main">Profil</Link>
          {/* Kéne css (pointer cursor, hover effect stb) */}
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
