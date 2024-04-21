import React from 'react';
import PersonCard from './PersonCard';
import Navbar from "./Nav";
import Footer from "./Footer";

const Rating = () => {
    const people = [
        {
          name: 'Mr Yash Pradhan',
          image: 'https://ptu.ac.in/wp-content/uploads/2023/08/WhatsApp-Image-2023-07-31-at-12.37.26-1.jpeg',
          review: 'Tredul has empowered me to become a more conscious traveler. Through meaningful interactions with locals and immersion in community projects, I have gained a deeper understanding of the places I visit.',
          
        },
        {
          name: 'Ms Manveen kaur',
          image: 'https://ptu.ac.in/wp-content/uploads/2023/05/Snap-Manveen-Kaur.jpg',
          review: 'Tredul has shown me that the best travel experiences are often found off the beaten path. Whether its learning traditional crafts or participating in local festivals, every moment feels authentic and genuine.',
            
          },
          {
            name: 'Ms Jashandeep Kaur',
          image: 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png',
          review: 'I have been a part of many travel platforms, but Tredul stands out for its emphasis on responsible tourism. Its refreshing to see a platform that prioritizes sustainability and ethical travel practices.',
            
          },
          {
            name: 'Mr Yogesh Kumar',
          image: 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png',
          review: 'What I love most about Tredul is the opportunity to immerse myself in the culture of the places I visit. The connections I have made with locals have made my travels truly meaningful.',
            
          },
          {
            name: 'Ms Sakshi Narang',
          image: 'https://media.licdn.com/dms/image/C4D03AQFiGQH7DfQJWw/profile-displayphoto-shrink_400_400/0/1657207214444?e=2147483647&v=beta&t=B-edIeXUyAiUj29GVfg0AOR5Mq24xaGY4KXugFqRSMI',
          review: 'Tredul opened up a whole new world of experiences for me. From exploring local cuisines to volunteering in community projects, every journey has been enriching and memorable.',
          },
        
        {
          name: 'Mr Parteek Kumar',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzWF-OyC8oSAPrpqmpvFMOYxWPLdyzyEgqVuMU-rsGGw&s',
          review: 'Traveling with Tredul is like embarking on a journey of self-discovery. Through workshops, homestays, and volunteer opportunities, I have learned more about myself and the world around me than I ever thought possible.',
        },
        {
          name: 'Ms Srishti Pandey',
          image: 'https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png',
          review: 'Traveling with Tredul has been a game-changer for me. Its not only about exploring new places but also about personal growth and cultural exchange. I return from every trip feeling enriched and inspired.',
        },
        {
          name: 'Mr Mohammad Hamza',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTVHrYDIbV1APjKcwpiak-RWSju6DjzcWX67kP4qVxA&s',
          review:'Thanks to Tredul, I have had the opportunity to step out of my comfort zone and embark on life-changing adventures. Whether its trekking through remote villages or participating in community workshops, every experience has left a lasting impression.',
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
