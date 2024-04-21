import React from "react";
import "../index.css";
import home from "../asset/home.jpeg";
import carousel1 from "../asset/tttt.jpg";
import carousel2 from "../asset/carousel1.jpg";
import carousel3 from "../asset/carousel22.jpg";
import hom from "../asset/nadda.jpg";
import iitr from "../asset/iitr.jpg";
import cuc from "../asset/cuc.jpg";
import binod from "../asset/binod.jpg";
import nitk from "../asset/nitk.jpg";
import Navbar from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import PersonCard from './PersonCard';

import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  width:'100%',
  height: '84vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const people = [
  {
    name: ' Ms. Raman Kaur',
    image: 'https://media.licdn.com/dms/image/D4D03AQGhp2Ynh3tjlQ/profile-displayphoto-shrink_200_200/0/1695783313729?e=2147483647&v=beta&t=sGHN8ga6IVXTxI_O0BCorR8ckrKwoj51D71shycx4fc',
    review: 'Travels into meaningful experiences. Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
    
  },
  
  {
    name: ' Shri Vijay Kumar Nadda',
    image: 'https://pbs.twimg.com/profile_images/1104984793203105797/cyWGcpOO_400x400.jpg',
    review: 'Tredul has transformed my travels into meaningful experiences.Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
  },
  {
    name: 'Ms. Manpreet Kaur',
    image: 'https://media.licdn.com/dms/image/D4D03AQGp0eAJojcUzw/profile-displayphoto-shrink_400_400/0/1679459229685?e=2147483647&v=beta&t=mab1DLlvjAytjPOtvO_RZtIPpy9UWCQuopqunPB3nnc',
    review: 'Tredul is more than just a travel platform; Its a gateway to authentic experiences. I have learned so much from the communities I have visited and left a positive impact wherever I go.',
  },
  {
    name: 'Mr. Ramendra Pratap',
    image: 'https://media.licdn.com/dms/image/D5622AQGLi8U7A7901Q/feedshare-shrink_800/0/1707328449713?e=2147483647&v=beta&t=YYq2nielubdSVRd-vnK9B5G5b11ixpvLdu_yn3vPzhM',
    review:'Tredul has helped me redefine the way I travel. It is not about ticking off bucket list items; its about embracing the unknown, stepping out of my comfort zone, and opening my heart to new adventures.',
  },
  
];

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return (
    <div className="home-container">
      <Navbar />
    
      {/* <-- start transparent--> */}
      <div className="main">
  
       <div className="cnttt">
          <h1 className="head_text">Explore Our Locations</h1>
          <p className="m"> 
          Discover the diverse destinations where Tredul has made a difference.<br/> From remote villages in hills to schools in forests, coastal areas, and deserts,<br/> our platform connects travelers with opportunities to make a <br/> lasting impact on communities around the world.
          </p>
          <button className="btn1"> Check Our Locations</button>
          </div>
       <div className="parent12">   
       <Carousel afterChange={onChange} autoplay autoplaySpeed={2000}  dots= {false}>
      <div className="transparent-image23">
        
        <img src={carousel1} style={contentStyle} alt="Image 1" className="mnb" />
      </div>
      <div className="transparent-image23">
      <img src={carousel2} style={contentStyle} alt="Image 2" />
      </div>
      <div className="transparent-image23">
      <img src={carousel3} style={contentStyle} alt="Image 3" />
      </div>
     
    </Carousel></div>
         
    {/* <-- end transparent--> */}
       {/* register account now */}
        <div className="se">
          <div className="share-experience">
            <img className="homeimg" alt="image" src={home} />
          </div>
          <div className="irc">
            <p className="visit">
              <h3 className="vs1">VISIT</h3>
              <br />
              <br /><h3 className="vs2">
              Universities, Colleges, Schools,
              <br /> NGOs, Spiritual Centres</h3>
            </p>
            <p className="travel">
              Travel to the places you like to visit on vacation/official tour,
              educate the needy from the destination you travel/visit, and live
              with them to share an extra dose of your professional/life
              experience.Visit  to embark on a journey that goes beyond sightseeing, where your travels become a force for positive change and education.Join us in Tr-Travel, Edu-Educate, and L-Live to make a meaningful difference in  the lives of those in need.
            </p>
            <center>
            <Link to="/register">  <button className="btn1">Register Account Now</button></Link>
              
            </center>

            {/* <-- end register account now--> */}
            {/* <--social-icons--> */}
          </div>
          <div className="swipe">
            <div className="icons">
              <ul className="twiter iconlist">
                <li className="swipeicon facebook"></li>
                <li className="swipeicon twitter"></li>
                <li className="swipeicon linkedin"></li>
                <li className="swipeicon insta"></li>
                <li className="swipeicon youtube"></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <--end social-icons--> */}
      {/* share experience */}
      <div className="mains">
        <div className="transparent">
          <p className="left">
            <h1>Calling all passionate travelers!</h1>
            <h2 className="travel_text">
              Your enriching journeys on Tredul and be part of a global
              community dedicated to exploring, connecting, and making a
              positive impact. Inspire others with your unique experiences
            </h2>
          </p>
          <Link to="/ShareExperience"> <button className="btn2">Share your Experience</button></Link>

        </div>
      </div>
      {/* end share experience */}
      {/* start mission */}
      <div className="container1">
        <div className="left1">
          <h2 className="r2">Mission</h2>
          <p className="t2">
            
            At Tredul, our mission is to bridge the gap between travelers and communities in need by creating a unique platform that enables individuals to share their professional expertise with schools, colleges, universities, NGOs, and spiritual centers. We believe in the power of travel not just for leisure but as a means to empower and educate those in remote areas.
            
          </p>
        </div>
        <div className="right2">
          <h2 className="r2">Vision</h2>
          <p className="t2">
            
            Our vision at Tredul is to foster a global community where travelers become catalysts for positive change. We aim to create a world where every journey is an opportunity to contribute to the growth and development of underserved communities, promoting knowledge exchange and cultural enrichment. We want to be the only choice of travellers in this era.
            
          </p>
        </div>
      </div>
      <div> 
        {/* end vision */}
        {/* Top edutourist start*/}
        <div className="big_container">
          <h1 className="m">Top Edutourist</h1>

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="thumbnail">
                  <img className="my" alt="location" src={hom} />
                  <div className="caption">
                    <p>
                    Shri Vijay  Nadda <br />(Organising Secretary, VBNZ)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail">
                  <img className="my" alt="location" src={iitr} />
                  <div className="caption">
                    <p>
                      Prof. Rajeev Ahuja<br />
                     (Director, IIT Ropar)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail">
                  <img className="my" alt="location" src={binod} />
                  <div className="caption">
                    <p>
                      Prof. Binod Kumar<br />
                      (Director, NIT Jalandhar)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail">
                  <img className="my" alt="location" src={nitk} />
                  <div className="caption">
                    <p>
                    Prof. B.V.R. Reddy <br />(Director, NIT Krukshetra)
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="thumbnail">
                  <img className="my" alt="location" src={cuc} />
                  <div className="caption">
                    <p>
                     Prof. Jagbir Singh <br/>(Chancellor, 
                     CU Punjab)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ps */}
        </div>
      </div>{/* end topedutourist */}
      <div>
        <div>
        <div className="home-page">
        <h1 className="m1">What People Say!</h1>
      <div className="people-container">
        {people.map((person, index) => (
          <PersonCard key={index} {...person} />
        ))}
        
      </div>
      
    </div>
          
        </div>
      </div>
     <div><ul >
          <li className="mann"><Link to="/Rating">More Reviews</Link></li></ul></div>
      <Footer />
      <div className="copy"> Copyright @DHE 2024 </div>
     
    </div>
  );
};

export default HomePage;
