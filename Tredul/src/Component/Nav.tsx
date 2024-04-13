import React, { useState } from 'react';
import './Nav.css';
import logo from "../asset/logo.png";
import { Link } from 'react-router-dom';
import './Activities.css';


import burg from '../asset/menu.jpg';

const Nav = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  const handleToggle = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    <div>
      <img className='burg' onClick={handleToggle} src={burg} alt="menu"></img>

      <nav>
        <div className="logo"><img className="mylogo" alt="location" src={logo} /></div>
        <ul className={isDisplayed ? "hover active" : "hover"}>
          <li className="mann"><Link to="/">Home</Link></li>
          <li><Link to="/Activities">Activities</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <Link to="/login">Login</Link>
          <li className="login"><Link to="/register">Register</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;




