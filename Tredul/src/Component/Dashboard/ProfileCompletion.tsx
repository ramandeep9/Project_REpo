
import { Link } from 'react-router-dom';
import Navbar from "../Nav";
import Footer from "../Footer";
import '../contact.css'
import React, { useState, useEffect } from 'react';


const ProfileCompletion: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOptions, setSelectedOptions] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleChanges = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions(event.target.value);
  };
  return (
    <div><Navbar/>
    <div className="contact-us-container">
       <h2 className="contact-us-header">Profile  <span  className='Touchcolor'>Setup</span></h2>
       
       <h3 className = "contact-us-innerheader">Wrap up your deets and hit the finish line!</h3>
      <div className="contact-form-container">
        <form className="contact-form">
          <div className="form-group">
          <h3 className="nm">Name</h3>
            <input type="text" className="inputt" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
          <h3 className="nm">Email</h3>
            <input className="inputt" type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
          <h3 className="nm">Mobile No.</h3>
            <input className="inputt" type="tel" id="mobile" name="mobile" placeholder="Your Mobile Number" required />
          </div>
          <div className="form-group">
          <h3 className="nm">Highest Qualification</h3>
          <div>
      
      <select id="dropdown" value={selectedOption} onChange={handleChange} className="inputt" >
        <option value="">-- Choose Highest Qualification--</option>
        <option value="option1">Bachelor's Degree</option>
        <option value="option2">Master's Degree</option>
        <option value="option3">Doctorate or higher</option>
      </select>
     
    </div>
          </div>
          <div className="form-group">
          <h3 className="nm">Language Proficiency</h3>
          <div>
      
      <select id="dropdown" value={selectedOptions} onChange={handleChanges} className="inputt" >
        <option value="">-- Choose Language--</option>
        <option value="AF">Afrikaans</option>
  <option value="SQ">Albanian</option>
  <option value="AR">Arabic</option>
  <option value="HY">Armenian</option>
  <option value="EU">Basque</option>
  <option value="BN">Bengali</option>
  <option value="BG">Bulgarian</option>
  <option value="CA">Catalan</option>
  <option value="KM">Cambodian</option>
  <option value="ZH">Chinese (Mandarin)</option>
  <option value="HR">Croatian</option>
  <option value="CS">Czech</option>
  <option value="DA">Danish</option>
  <option value="NL">Dutch</option>
  <option value="EN">English</option>
  <option value="ET">Estonian</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finnish</option>
  <option value="FR">French</option>
  <option value="KA">Georgian</option>
  <option value="DE">German</option>
  <option value="EL">Greek</option>
  <option value="GU">Gujarati</option>
  <option value="HE">Hebrew</option>
  <option value="HI">Hindi</option>
  <option value="HU">Hungarian</option>
  <option value="IS">Icelandic</option>
  <option value="ID">Indonesian</option>
  <option value="GA">Irish</option>
  <option value="IT">Italian</option>
  <option value="JA">Japanese</option>
  <option value="JW">Javanese</option>
  <option value="KO">Korean</option>
  <option value="LA">Latin</option>
  <option value="LV">Latvian</option>
  <option value="LT">Lithuanian</option>
  <option value="MK">Macedonian</option>
  <option value="MS">Malay</option>
  <option value="ML">Malayalam</option>
  <option value="MT">Maltese</option>
  <option value="MI">Maori</option>
  <option value="MR">Marathi</option>
  <option value="MN">Mongolian</option>
  <option value="NE">Nepali</option>
  <option value="NO">Norwegian</option>
  <option value="FA">Persian</option>
  <option value="PL">Polish</option>
  <option value="PT">Portuguese</option>
  <option value="PA">Punjabi</option>
  <option value="QU">Quechua</option>
  <option value="RO">Romanian</option>
  <option value="RU">Russian</option>
  <option value="SM">Samoan</option>
  <option value="SR">Serbian</option>
  <option value="SK">Slovak</option>
  <option value="SL">Slovenian</option>
  <option value="ES">Spanish</option>
  <option value="SW">Swahili</option>
  <option value="SV">Swedish </option>
  <option value="TA">Tamil</option>
  <option value="TT">Tatar</option>
  <option value="TE">Telugu</option>
  <option value="TH">Thai</option>
  <option value="BO">Tibetan</option>
  <option value="TO">Tonga</option>
  <option value="TR">Turkish</option>
  <option value="UK">Ukrainian</option>
  <option value="UR">Urdu</option>
  <option value="UZ">Uzbek</option>
  <option value="VI">Vietnamese</option>
  <option value="CY">Welsh</option>
  <option value="XH">Xhosa</option>
      </select>
     
    </div>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
      <Link to="/" className="back-link">Go back to Home Page</Link>
  
    </div><div><Footer/></div><div className="copy"> Copyright @DHE 2024 </div></div>
  );
};

export default ProfileCompletion;