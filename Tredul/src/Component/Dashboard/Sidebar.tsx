import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../asset/logo.png';
import { CloseCircleFilled } from '@ant-design/icons';
import { BsPeopleFill, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs';
import { toast } from 'react-hot-toast';

interface SidebarProps {
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
}

function Sidebar({ openSidebarToggle, OpenSidebar }: SidebarProps) {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically clear local storage after 24 hours
    const clearLocalStorage = () => {
      localStorage.clear();
      toast.success('Local storage cleared!');
    };

    const clearLocalStorageTimeout = setTimeout(clearLocalStorage, 24 * 60 * 60 * 1000);

    return () => clearTimeout(clearLocalStorageTimeout);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8080/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      
      if (response.ok) {
        toast.success('Logged out successfully!');
        localStorage.clear(); // Clear local storage on logout
        navigate('/login');
      } else {
        toast.error('Logout failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('An error occurred while logging out. Please try again later.');
    }
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
      <div className='dashboard-container'>
        <div className='sidebar-brand'>
          <div className="logo-container">
            <div className="l2">
              <h1 className="l1">Tredul</h1>
              <img src={logo} alt="Logo" className="logom" /> 
              <CloseCircleFilled className="closehost" onClick={OpenSidebar} />
            </div>
          </div>
        </div>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="/ProfileCompletion">
            <BsPeopleFill className='icon'/> Profile
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/SchdeuleTime">
            <BsFillArchiveFill className='icon'/> Open Ticket
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGrid3X3GapFill className='icon'/> Visit History
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon'/> Open Chats
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGrid3X3GapFill className='icon'/> Maps
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon'/> Edit Profile
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon'/> Settings
          </a>
        </li>
        <li className='sidebar-list-item' onClick={handleLogout}>
          <a href="#">
            <BsPeopleFill className='icon'/> Log Out
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;