
import React from 'react';
import logo from '../../asset/logo.png';
import logot from '../../asset/cross.jpg';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'


 interface SidebarProps {
    openSidebarToggle: boolean; // Define the type for openSidebarToggle
    OpenSidebar: () => void; // Define the type for OpenSidebar
  }
  function Sidebar({ openSidebarToggle, OpenSidebar }: SidebarProps) {
 
    return (
    
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
    <div className='dashboard-container'>
        
        <div className='sidebar-brand'>
        <div className="logo-container"><div className="l2"><h1 className="l1">Tredul</h1>
           <img src={logo} alt="Logo" className="logom" /> 
           
           <span className='icon close_icon' onClick={OpenSidebar}>X</span>
           </div> </div>
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
                <a href="">
                    <BsFillArchiveFill className='icon'/>   Open Ticket
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
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Log Out
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar