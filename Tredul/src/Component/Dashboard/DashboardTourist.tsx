import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo.png';
import './dashboard.css';

const DashboardTourist: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Left sidebar */}
      <div className="sidebar">
        <div className="logo-container"><div className="l2"><h1 className="l1">Tredul</h1>
          <img src={logo} alt="Logo" className="logom" /></div>
          <h5>EduTourist</h5>
        </div>
        <div className="profile">
          {/* Display user profile details here */}
          <h4>User Profile</h4>
          {/* Add user profile details here */}
        </div>
        <div className="menu">
          <ul>
            <div className="m3">
            <li>
              <Link to="/dashboard-tourist">Dashboard</Link>
            </li></div>
            <div className="m3"><li>
              <Link to="/open-ticket">Open Ticket</Link>
            </li></div>
            <div className='m3'>
            <li>
              <Link to="/visit-history">Visit History</Link>
            </li>
            </div>
            <div className="m3">
            <li>
              <Link to="/open-chats">Open Chats</Link>
            </li></div>
            <div className="m3">
            <li>
              <Link to="/maps">Maps</Link>
            </li></div>
            <div className="m3">
            <li>
              <Link to="/edit-profile">Edit Profile</Link>
            </li></div>
            <div className="m3">
            <li>
              <Link to="/logout">Logout</Link>
            </li>
            </div>
          </ul>
        </div>
      </div>
      {/* Right-hand side content */}
      <div className="main-content">
        {/* Content for the right-hand side goes here */}
      </div>
    </div>
    
  );
};

export default DashboardTourist;