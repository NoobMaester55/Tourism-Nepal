import React from 'react';

const Card = ({ image, title, stars, numberOfRatings, description, website }) => {
  const RatingSection = ({ stars, numberOfRatings }) => {
    const maxStars = 5;
    const filledStars = Math.min(Math.max(stars, 0), maxStars); // Ensuring stars is between 0 and maxStars
    const emptyStars = maxStars - filledStars;

    return (
      <div className="flex items-center text-sm text-gray-400 mb-4">
        {[...Array(filledStars)].map((_, index) => (
          <svg key={index} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.926c.969 0 1.371 1.24.588 1.81l-3.993 2.905a1 1 0 00-.364 1.118l1.519 4.674c.3.921-.755 1.688-1.541 1.118L10 15.347l-3.993 2.905c-.786.57-1.841-.197-1.541-1.118l1.519-4.674a1 1 0 00-.364-1.118L2.24 9.1c-.783-.57-.381-1.81.588-1.81h4.926a1 1 0 00.95-.69l1.519-4.674z" />
          </svg>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <svg key={index} className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.926c.969 0 1.371 1.24.588 1.81l-3.993 2.905a1 1 0 00-.364 1.118l1.519 4.674c.3.921-.755 1.688-1.541 1.118L10 15.347l-3.993 2.905c-.786.57-1.841-.197-1.541-1.118l1.519-4.674a1 1 0 00-.364-1.118L2.24 9.1c-.783-.57-.381-1.81.588-1.81h4.926a1 1 0 00.95-.69l1.519-4.674z" />
          </svg>
        ))}
        <span className="ml-2">({numberOfRatings})</span>
      </div>
    );
  };

  const handleReadMoreClick = () => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden mb-6">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <RatingSection stars={stars} numberOfRatings={numberOfRatings} />
        <p className="text-gray-300 mb-4">{description}</p>
        <button onClick={handleReadMoreClick} className="text-blue-500 hover:underline">
          Read more →
        </button>
      </div>
    </div>
  );
};

export default Card;
