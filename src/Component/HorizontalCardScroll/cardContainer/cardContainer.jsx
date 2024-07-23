// ExploreSection.js
import React from 'react';
import './cardContainer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

const ExploreSection = ({ imageSource,description,path }) => {
  return (
    <div className="card">
      <img className="cardImage" src={imageSource} alt="Avatar" style={{ width: '100%' }} />
      <Link to = {path}>
      <div className="container">
        {description}
      </div>
      </Link>
    </div>
  );
};

export default ExploreSection;
