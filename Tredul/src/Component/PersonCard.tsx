import React from 'react';
import './PersonCard.css';



interface Person {
  name: string;
  image: string;
  review: string;
}

const PersonCard: React.FC<Person> = ({ name, image, review }) => {
  return (
    <div className="person-card">
      <div className="person-info">
      <img className="profile-image" src={image} alt={name} />
        <h2 className="nm">{name}</h2>
      </div>
      <p className="g">{review}</p>
    </div>
  );
};

export default PersonCard;
