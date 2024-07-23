import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../Data/data';
import Testimonials from '../Component/Testimonials/Testimonials';

const PlaceDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { placeId } = useParams();
  const place = data.find(p => p.id === placeId);

  if (!place) {
    return <div>Place not found</div>;
  }

  return (
    <div>
      <div 
        className="w-full h-screen bg-cover bg-center bg-fixed" 
        style={{ backgroundImage: `url(${place.Imgsrc})` }}>
      </div>
      <div className="w-4/5 mx-auto rounded-lg bg-gray-300 relative -top-52 z-20 p-12 text-black font-montserrat text-justify">
        <div className="text-primary text-3xl font-bold text-center shadow-lg">
          {place.Title}
        </div>
        <div className="whitespace-pre-wrap">
          {place.Description}
        </div>
        {place.testimonials && <Testimonials testimonials={place.testimonials} />}
      </div>
    </div>
  );
};

export default PlaceDetail;
