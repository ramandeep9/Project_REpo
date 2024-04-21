// AboutUs.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./Nav";
import Footer from "./Footer";
import './aboutus.css'
const AboutUs: React.FC = () => {
  return (
    <div><Navbar/>
    <div className="about-us-container">
      <h2 className="about-us">About Us</h2>
      <div className="about-us-content">
        <p className="r">

        Tredul, derived from "Tr-Travel, Edu-Educate, and L-Live," was conceived by Dr. Thakur SKR, an IITD alumni and pioneer scientist of ISRO, during his visit to Himachal Pradesh. As a passionate advocate for education and community development, he envisioned a platform that harnesses the generosity of travelers to bring meaningful learning experiences to remote areas.
        The beginning of tredul was quite demure. Once Dr Thakur SKR an IITD alumni, pioneer scientist of ISRO and staunch worker of RSS visited Himachal Pradesh on a vacation for a week. He stayed in a homestay in a village like other travellers stay. 
        He observed school students going in a queue on the road.
        Being a School/College/University visitor and founder of GetSetLive Series, he felt that how difficult 
        it is to send the good speakers or professionals or industrialists to village schools specifically the one situated in remote villages of hills, forests, coastal and desert areas.
       However, all such professionals do visit these places by spending lacs from their pocket on vacations. 
       They spend, enjoy and come back.
       If something can be made in such a way that their few hours from many days of their vacation to these spots are taken and given to the students of these areas then it will be great help/support to these little flowers to blossom and extra enjoyment and knowledgeable experience for these highly educated and exprienced travellers.
        This thought clicked in the mind of Dr Thakur SKR and without wasting any time Dr Thakur SKR decided to start something on this concept. Being a RSS worker, he used to interact with various RSS functionaries and Pracharaks. One day, Dr Thakur SKR presented the idea to launch such a platform with Mr Vijay Kumar Nadda, Senior RSS Pracharak and Organisational Secretary, Vidya Bharati (North, Region). He was delighted to listen the concept and immediatly he gave a go ahead to this platform. In this way, the thought was converted into tredul i.e. Travel the place you like to visit on vacation/official tour, Educate the needy from the destination you travel/visit and Live with them to share extra dose of your professional/life experience if you feel so.
        </p>
        <Link to="/" className="back-link">Go back to Home Page</Link>
      </div>
    </div><div><Footer/></div> <div className="copy"> Copyright @DHE 2024 </div></div>
  );
};

export default AboutUs;
