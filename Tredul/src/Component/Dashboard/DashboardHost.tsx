import React, { useState, useEffect } from 'react';
import Hosted from './Hosted';
import Header from './Header';
import burg from '../../asset/menu.jpg';
import Sidebar from './Sidebar';
import SidebarHost from './SidebarHost';
import Headerhost from './Headerhost'


import './dashboardtourist.css';
import { Link } from 'react-router-dom';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';



const DashboardHost = ({ openSidebarhostToggle, OpenSidebarhost }: { openSidebarhostToggle: boolean, OpenSidebarhost: () => void }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggle = () => {
    setIsDisplayed(!isDisplayed);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);
  return (
    
    <div className='grid-container'>
      <Headerhost OpenSidebarhost={toggleSidebar} />
     <SidebarHost openSidebarhostToggle={isSidebarOpen} OpenSidebarhost={toggleSidebar}  />
   <main className='main-container'>
        <div className='main-title'>
          <h3>Welcome To Tredul</h3>
        </div>
        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>Profile</h3>
              <BsPeopleFill className='card_icon' />
            </div>
            <h4>Manpreet Kaur <br />(DHE)</h4>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Open Ticket</h3>
              <BsFillArchiveFill className='card_icon' />
            </div>
            <h1>300</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Visit History</h3>
              <BsFillGrid3X3GapFill className='card_icon' />
            </div>
            <h1>12</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Open Chats</h3>
              <BsPeopleFill className='card_icon' />
            </div>
            <h1>33</h1>
          </div><Link to="/ReviewForm" style={{ textDecoration: 'none', color:'#fff' }}>
          <div className='card'>
            <div className='card-inner'>
              <h3>Review</h3>
              <BsFillBellFill className='card_icon' />
            </div>
            <h1>42</h1>
          </div></Link>
        </div>
      </main>
    </div>
  )
}

export default DashboardHost

