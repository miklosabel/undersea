import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import ProfileImg from '../../assets/default_profile_image.png';

interface Props {
  userName: string;
}

export class Sidebar extends Component<Props, {}> {
  render() {
    return (
      <div className="sidebar">
        <Link to="/main">Épületek</Link>
        <Link to="/main">Támadás</Link>
        <Link to="/main">Harc </Link>
        <Link to="/main">Ranglista</Link>
        <Link to="/main">Sereg</Link>
        <div className="usermenu">
          <img src={ProfileImg} alt="profile" />
          <p>{this.props.userName}</p>
          <Link to="/main">Profil</Link>
          <Link to="/login">Kijelentkezés</Link>
        </div>
        <div className="undersea-line"></div>
        <h1 className="undersea-title">UNDERSEA</h1>
      </div>
    );
  }
}

export default Sidebar;
