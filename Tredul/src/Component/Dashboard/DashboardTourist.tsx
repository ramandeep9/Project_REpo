import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Link, useNavigate } from 'react-router-dom';
import './dashboardtourist.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';

function DashboardTourist({ openSidebarToggle, OpenSidebar }: { openSidebarToggle: boolean, OpenSidebar: () => void }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={toggleSidebar} />
      <Sidebar openSidebarToggle={isSidebarOpen} OpenSidebar={toggleSidebar} />  
                
     
               
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
              <Link to="/SchdeuleTime">
                <BsFillArchiveFill className='card_icon' />
               </Link>
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
          </div>
          <Link to="/ReviewForm" style={{ textDecoration: 'none', color:'#fff' }}>
          <div className='card'>
            <div className='card-inner'>
            <h3 className="rev">Review</h3>
              <BsFillBellFill className='card_icon'  />
            </div>
            <h1 className="rev">42</h1>
          </div></Link>
        </div>
      </main>
    </div>
  );
}

export default DashboardTourist;
