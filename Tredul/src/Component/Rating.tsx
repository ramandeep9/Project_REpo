import React from 'react';
import PersonCard from './PersonCard';
import Navbar from "./Nav";
import Footer from "./Footer";

const Rating = () => {
    const people = [
        {
          name: 'Dr Thakur SKR',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_JVikWGvgIrEvXl67LCZGsPQfX35DPH12BhMYec-pQ&s',
          review: 'Travels into meaningful experiences. Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
          
        },
        {
          name: 'Dr Thakur SKR',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_JVikWGvgIrEvXl67LCZGsPQfX35DPH12BhMYec-pQ&s',
          review: 'Travels into meaningful experiences. Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
            
          },
          {
            name: 'Dr Thakur SKR',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_JVikWGvgIrEvXl67LCZGsPQfX35DPH12BhMYec-pQ&s',
          review: 'Travels into meaningful experiences. Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
            
          },
          {
            name: 'Dr Thakur SKR',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_JVikWGvgIrEvXl67LCZGsPQfX35DPH12BhMYec-pQ&s',
          review: 'Travels into meaningful experiences. Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
            
          },
          {
            name: 'Dr Thakur SKR',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_JVikWGvgIrEvXl67LCZGsPQfX35DPH12BhMYec-pQ&s',
          review: 'Travels into meaningful experiences. Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
          },
        
        {
          name: ' Shri Vijay Kumar Nadda',
          image: 'https://pbs.twimg.com/profile_images/1104984793203105797/cyWGcpOO_400x400.jpg',
          review: 'Tredul has transformed my travels into meaningful experiences. Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
        },
        {
          name: 'Ms Manpreet',
          image: 'https://media.licdn.com/dms/image/D4D03AQGp0eAJojcUzw/profile-displayphoto-shrink_400_400/0/1679459229685?e=2147483647&v=beta&t=mab1DLlvjAytjPOtvO_RZtIPpy9UWCQuopqunPB3nnc',
          review: 'Tredul has transformed my travels into meaningful experiences. Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
        },
        {
          name: 'Mr Ramendra Pratap',
          image: 'https://media.licdn.com/dms/image/D5622AQGLi8U7A7901Q/feedshare-shrink_800/0/1707328449713?e=2147483647&v=beta&t=YYq2nielubdSVRd-vnK9B5G5b11ixpvLdu_yn3vPzhM',
          review:'Tredul has transformed my travels into meaningful experiences. Connecting with local communities and sharing my knowledge has been incredibly rewarding.',
        },
        
      ];
  return (
    <div>
       <Navbar/>
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
      </div><div><Footer/></div>
    </div>
  )
}

export default Rating
