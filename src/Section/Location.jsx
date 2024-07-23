import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import locationData from '../Data/locationData';

const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Location = ({ locationDataKey, places }) => {
  const { hero, gallery, locationMapImage } = locationData[locationDataKey] || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative w-full h-[320px]">
        <div className="absolute inset-0 opacity-70">
          <img src={hero?.backgroundImage} alt="Background" className="object-cover object-center w-full h-full" />
        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">{locationDataKey}</h1>
            <p className="font-regular text-xl mb-8 mt-4">{hero?.shortIntro}</p>
            <button
              onClick={() => scrollToSection('locationSection')}
              className="px-6 py-3 bg-[#c8a876] text-white font-medium rounded-full hover:bg-[#c09858] transition duration-200"
            >
              Location
            </button>
          </div>
        </div>
      </div>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Places To Visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {places.map((place) => (
              <div key={place.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={place.Imgsrc} alt={place.Title} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <Link to={`/${place.learnMorePath}`}>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">{place.Title}</h3>
                  </Link>
                  <p className="text-gray-700 text-base">{truncateText(place.Description, 100)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="text-gray-700 body-font" id="gallery">
        <div className="flex justify-center text-3xl font-bold text-gray-800 text-center py-10">Gallery</div>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {gallery?.slice(0, 4).map((img, index) => (
            <div key={index} className="group relative">
              <img
                src={img}
                alt={`Gallery Image ${index + 1}`}
                className="aspect-[2/3] h-80 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {locationMapImage && (
        <section className="bg-gray-100" id="locationSection">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900" id="contactUs">Visit Our Location</h2>
            </div>
            <div className="mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={locationMapImage}
                    alt="Location Map"
                    className="w-full h-64 object-cover object-center rounded-lg transition duration-200 ease-in-out transform hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Location;
