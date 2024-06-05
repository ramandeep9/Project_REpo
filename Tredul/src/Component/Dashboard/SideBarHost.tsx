

import React, { useState, useEffect } from "react";
import Icon from '../../asset/logo.png';
import { useNavigate } from 'react-router-dom'; 
import './main.css';
import { toast } from 'react-hot-toast';
import Profile from "../../asset/iitr.jpg";
import Dashboard from "../../asset/dashboard.svg";
import Transactions from "../../asset/transactions.svg";
import News from "../../asset/news.svg";
import Settings from "../../asset/settings.svg";
import Support from "../../asset/support.svg";
import { useLocation } from "react-router-dom";
import { Button } from "antd";
import { CloseCircleFilled } from '@ant-design/icons';
import {  BsFillGearFill } from 'react-icons/bs';


interface SidebarhostProps {
    openSidebarhostToggle: boolean;
    OpenSidebarhost: () => void;
}

const SidebarHost = ({ openSidebarhostToggle, OpenSidebarhost }: SidebarhostProps) => {
    const location = useLocation();
    const [closeMenu, setCloseMenu] = useState(false);
    const [loadingStates, setLoadingStates] = useState<Array<boolean>>([false, false, false, false, false, false]);
    const navigate = useNavigate();

    useEffect(() => {
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
                navigate('/login');
            } else {
                toast.error('Logout failed. Please try again later.');
            }
        } catch (error) {
            console.error('Error logging out:', error);
            toast.error('An error occurred while logging out. Please try again later.');
        }
       
    };

    const handleListItemClick = async (index: number) => {
        try {
            setLoadingStates(prevStates => {
                const updatedStates = [...prevStates];
                updatedStates[index] = true;
                return updatedStates;
            });

            // Perform asynchronous action here, e.g., fetching data

            // Simulate loading delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            setLoadingStates(prevStates => {
                const updatedStates = [...prevStates];
                updatedStates[index] = false;
                return updatedStates;
            });
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        <div id="sidebar789" className={`sidebar ${openSidebarhostToggle ? "sidebar-responsive" : ""} ${closeMenu === false ? "sidebar789" : ""}`}>
            <div className={closeMenu === false ? "logoContainer" : "logoContainer active"}>
            <h4 className="title">TREDUL</h4> 
                <img src={Icon} alt="icon" className="logo" />
                 
                <CloseCircleFilled  className="closehost" onClick={OpenSidebarhost}  />
            </div>
           <div className={closeMenu === false ? "contentsContainer" : "contentsContainer active"}>
                <ul>
                    <ListItem 
                        index={0}
                        imgSrc={Dashboard}
                        altText="dashboard"
                        text="Profile"
                        path="/ProfileHost"
                        location={location}
                        loading={loadingStates[0]}
                        onClick={handleListItemClick}
                    />
                    <ListItem 
                        index={1}
                        imgSrc={Transactions}
                        altText="transactions"
                        text="Open Tickets"
                        path="/transactions"
                        location={location}
                        loading={loadingStates[1]}
                        onClick={handleListItemClick}
                    />
                    <ListItem 
                        index={2}
                        imgSrc={News}
                        altText="News"
                        text="Open Chats"
                        path="/news"
                        location={location}
                        loading={loadingStates[2]}
                        onClick={handleListItemClick}
                    />
                    <ListItem 
                        index={3}
                        imgSrc={News}
                        altText="News"
                        text="Create Tickets"
                        path="/news"
                        location={location}
                        loading={loadingStates[3]}
                        onClick={handleListItemClick}
                    />
                    <ListItem 
                        index={4}
                        imgSrc={Settings}
                        altText="Settings"
                        text="Settings"
                        path="/Settings"
                        location={location}
                        loading={loadingStates[4]}
                        onClick={handleListItemClick}
                    />
                  
                    <li className={location.pathname === "/support" ? "active" : ""} onClick={handleLogout}>
                        <img src={Support} alt="Support" className="dashh" />
                        <a href="#">{loadingStates[5] ? 'Loading...' : 'Log Out'}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

interface ListItemProps {
    index: number;
    imgSrc: string;
    altText: string;
    text: string;
    path: string;
    location: any;
    loading: boolean;
    onClick: (index: number) => void;
}

const ListItem = ({ index, imgSrc, altText, text, path, location, loading, onClick }: ListItemProps) => {
    return (
        <li className={location.pathname === path ? "active" : ""} onClick={() => onClick(index)}>
            <img src={imgSrc} alt={altText} className="dashh" />
            <a href={path}>{loading ? 'Loading...' : text}</a>
        </li>
    );
};

export default SidebarHost;
