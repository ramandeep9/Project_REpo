import React, { useState } from 'react';
import photo from '../asset/image.jpeg';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./Nav";
import Footer from "./Footer";
import './contact.css';

const ContactUs: React.FC = () => {
  const navigate = useNavigate();
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    mobile: '',
    application: '',
    query: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://tredul-backend.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contactData)
      });

      if (response.ok) {
        // Handle success, e.g., show a success message to the user
        window.alert('Message sent successfully!')
        navigate("/")
        console.log('Message sent successfully')
      } else {
        // Handle error, e.g., show an error message to the user
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
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
      <Navbar />
      <div className="contact-us-container">
        <h2 className="contact-us-header">Get in <span className='Touchcolor'>Touch</span></h2>
        <div className="background image">
          <img className="img" alt="image" src={photo} />
        </div>
        <h3 className="contact-us-innerheader">Drop a line, we're all ears! Simple, quick, and ready to make your messages count</h3>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit} >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" 
              className="inputt" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              value={contactData.name} 
              onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="inputt"
               type="email" 
               id="email"
               name="email"
               placeholder="Your Email"
               value={contactData.email} 
               onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input className="inputt"
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Your Mobile Number" 
                  value={contactData.mobile}
                  onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="application">Application</label>
              <input type="text"
               className="inputt"
                id="application" 
                name="application"
                placeholder="Application" 
                value={contactData.application} 
                onChange={handleChange}  />
            </div>
            <div className="form-group">
              <label htmlFor="query">Query</label>
              <textarea id="query"
               name="query"
               placeholder="Your Query"
               value={contactData.query}
               onChange={handleChange}
               ></textarea>
            </div>
            <button type="submit" className="submit-btn">Message</button>
          </form>
        </div>
        <Link to="/" className="back-link">Go back to Home Page</Link>

      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;