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
        <Link to="/main/buildings">Épületek</Link>
        <Link to="/main">Támadás</Link>
        <Link to="/main">Harc </Link>
        <Link to="/main">Ranglista</Link>
        <Link to="/main">Sereg</Link>
        <div>
          <img src={ProfileImg} alt="profile" />
          <p>{this.props.userName}</p>
          <Link to="/main">Profil</Link>
          <Link to="/login">Kijelentkezés</Link>
        </div>
        <span></span>
        <h1>undersea</h1>
      </div>
    );
  }
}

export default Sidebar;
