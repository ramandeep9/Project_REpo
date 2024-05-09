import React, { useState,useEffect } from "react";
import Icon from '../../asset/logo.png';
import { useNavigate } from 'react-router-dom'; 
import './main.css';
import { toast } from 'react-hot-toast';
import Profile from "../../asset/iitr.jpg";
import Dashboard from "../../asset/dashboard.svg";
import Transactions from "../../asset/transactions.svg";
import Performance from "../../asset/performance.svg";
import News from "../../asset/news.svg";
import Settings from "../../asset/settings.svg";
import Support from "../../asset/support.svg";
import { useLocation } from "react-router-dom";

import {CloseCircleFilled } from '@ant-design/icons';

interface SidebarhostProps {
    openSidebarhostToggle: boolean; // Define the type for openSidebarToggle
    OpenSidebarhost: () => void; // Define the type for OpenSidebar
  }
const SidebarHost = ({ openSidebarhostToggle, OpenSidebarhost }: SidebarhostProps) => {
    const location = useLocation();
const [closeMenu, setCloseMenu] = useState(false);
const navigate = useNavigate(); // Initialize useNavigate hook

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
        localStorage.clear();
        navigate('/login'); // Navigate to login page after successful logout
      } else {
        toast.error('Logout failed. Please try again later.');
      }
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('An error occurred while logging out. Please try again later.');
    }
  };

    return (
        <div id="sidebar" className={`sidebar ${openSidebarhostToggle ? "sidebar-responsive" : ""} ${closeMenu === false ? "sidebar789" : ""}`}>

            <div
                className={
                    closeMenu === false
                        ? "logoContainer"
                        : "logoContainer active"
                }
            >
               
           <img src={Icon} alt="icon" className="logo" />
                <h2 className="title">TREDUL. </h2>  <CloseCircleFilled  className="closehost" onClick={OpenSidebarhost}  />
            </div>
            
            <div
                className={
                    closeMenu === false
                        ? "profileContainer"
                        : "profileContainer active"
                }
            >
                <img src={Profile} alt="profile" className="profile" />
                <div className="profileContents">
                    <p className="name">Hello, AMIT👋</p>
                    <p>amitpalsingh@gmail.com</p>
                </div>
            </div>
            <div
                className={
                    closeMenu === false
                        ? "contentsContainer"
                        : "contentsContainer active"
                }
            >
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <img src={Dashboard} alt="dashboard" className="dashh" />
                        <a href="/ProfileHost">Profile</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/transactions"
                                ? "active"
                                : ""
                        }
                    >
                        <img src={Transactions} alt="transactions" className="dashh" />
                        <a href="/transactions">Open Tickets</a>
                    </li>
                    
                    <li
                        className={
                            location.pathname === "/news" ? "active" : ""
                        }
                    >
                        <img src={News} alt="News" className="dashh" />
                        <a href="/news">Open Chats</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/news" ? "active" : ""
                        }
                    >
                        <img src={News} alt="News" className="dashh" />
                        <a href="/news">Create Tickets</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/settings" ? "active" : ""
                        }
                    >
                        <img src={Settings} alt="Settings" className="dashh"/>
                        <a href="/settings">settings</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/support" ? "active" : ""
                        }
                        onClick={handleLogout}
                    >
                        <img src={Support} alt="Support" className="dashh" />
                        <a href="#">Log Out</a>
                    </li>
                </ul>
                
            </div>
        </div> 
    );
};

export default SidebarHost;