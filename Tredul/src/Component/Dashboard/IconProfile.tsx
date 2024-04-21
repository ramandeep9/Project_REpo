
import React, { useState } from 'react';

import './icon.css';
import { SettingOutlined } from '@ant-design/icons';
import { BsPersonCircle } from 'react-icons/bs';

const IconProfile = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    
    <div>
      <BsPersonCircle className='icon0' onClick={toggleVisibility} />
      {isVisible && (
        <div className="mst">
            
          <div className="profile-container">
            <div className="profile-icon">
              <div className="head32" style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/009/749/643/non_2x/woman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg')` }}></div>
            </div>
            <div className="profile-details">
              <h4 className="name">Manpreet Kaur</h4>
              <div className="circles">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <button className="stay-signed-in"><h5 className="staysignin">Stay Signed In</h5></button>
            </div>
          </div>
          <div className="other-profiles">
            <h3 className="other-profiles-label">Other Profiles</h3>
            <div><SettingOutlined /></div>
          </div>
          <div className="other-ids">
            <div className="id">
              <div className="head32" style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/009/749/643/non_2x/woman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg')` }}></div>
              <span className="spa">Srishti</span>
            </div>
            <div className="id">
              <div className="head32" style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/009/749/643/non_2x/woman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg')` }}></div>
              <span className="spa">Ramandeep Kaur</span>
            </div>
            <div className="id">
              <div className="head32" style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/009/749/643/non_2x/woman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg')` }}></div>
              <span className="spa">Guest</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default IconProfile;