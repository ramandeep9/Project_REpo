import React, { useState, useEffect } from 'react';
import './Footer.css';
import tredul from '../logos/tredul.jpeg';
import itr from '../logos/itr.jpeg';
import vi from '../logos/vi.jpeg';
import skrase from '../logos/sk.jpeg';
import holis from '../logos/holis.png';
import puja from '../logos/puja.jpeg';
import swadeshi from '../logos/swadeshi.jpeg';
import job from '../logos/job.jpeg';
import sarvatr from '../logos/sarvatr.jpeg';
import tudu from '../logos/tudu.jpeg';
import dhe from '../logos/dhe.jpeg';
import vb from '../logos/vb.jpeg';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    mobile: '',
    application: '',
    query: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://tredul-backend.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
      });

      if (response.ok) {
        // Reset form fields
        setContactData({
          name: '',
          email: '',
          mobile: '',
          application: '',
          query: ''
        });
        console.log('Message sent successfully');
        navigate("/");
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <footer>
        <div className="map"><iframe className="mapp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.41634419248265!2d76.70846544206141!3d30.699798573459468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1710140719324!5m2!1sen!2sin" width="300" height="250" ></iframe></div>
        
        <div className="contacter">
          <h2 className='footerHead'>CONTACT US</h2>
          <form id='Footerform' onSubmit={handleSubmit}>
            <input className="ino" type="text" id="name" name="name"
             placeholder="Name"   value={contactData.name} 
             onChange={handleChange} required />
            <input className="ino" type="text" name="email"
            placeholder="Enter Email"value={contactData.email} 
            onChange={handleChange} required/>
            <input className="ino" type="text" name="mobile" 
            placeholder="Mobile Number" value={contactData.mobile}
            onChange={handleChange} required />
            <input className="ino" type="text" name="query"
            placeholder="Query"  value={contactData.query}
            onChange={handleChange} required />
            <button className="buttnF" disabled={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>

        <div className="third">
          <div className="linksuse">  
            <h2 className="small">USEFUL LINKS</h2>
            <div className="gridlog"> 
              <a href="https://www.tredul.in/" target="_blank"><img className="logim" src={tredul} /></a>
              <a href="https://www.vi.rase.co.in/" target="_blank"><img className="logim" src={vi} /></a> 
              <a href="https://www.vidyabharti.net/" target="_blank"><img className="logim" src={vb} /></a>
              <a href="https://vi.rase.co.in/" target="_blank"><img className="logim" src={skrase} /></a>
              <a href="https://www.tudu.co.in/" target="_blank"><img className="logim" src={tudu} /></a>
              <a href="https://www.swadeshibazaar.netlify.app/" target="_blank"><img className="logim" src={swadeshi} /></a>
              <a href="https://www.itrchandigarh.org/" target="_blank"><img className="logim" src={itr} /></a>
              <a href="https://www.jobs360degree.in/" target="_blank"><img className="logim" src={job} /></a>
              <a href="https://www.alltemples.org.in/" target="_blank"><img className="logim" src={holis} /></a>
              <a href="https://www.dhe.org.in/" target="_blank"><img className="logim" src={dhe} /></a>
              <a href="https://www.poojawala.in/" target="_blank"><img className="logim" src={puja} /></a>
              <a href="https://www.sarvatr.co.in/" target="_blank"><img className="logim" src={sarvatr} /></a>
            </div>
          </div>

          <br/>
          <div className="social-icons">
            <h2 className="small">FOLLOW US</h2>
            <hr></hr>
            <ul className="twiter">
              <li className="logger facebook"></li>
              <li className="logger twitter"></li>
              <li className="logger linkedin"></li>
              <li className="logger insta"></li>
              <li className="logger youtube"></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
