import React, { useEffect } from 'react';
// PART - 1
import Hero from '../Component/BackgroundWithText/BackgroundWithText';
import Background from '/image/Mountain1.jpg'
// PART - 2
import Places from '../Component/HorizontalCard/HorizontalCard';
import { data } from '../Data/data';

function MountainSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // PART - 1
  const texts = ["Conquer Nepal's Majestic Peaks", "Discover the Himalayas", "Experience the Splendor of Nepal's Mountains", "Explore the World's Highest Peaks"];

  
  const filteredData = data.filter(item => item.categories.includes('mountain'));
  return (
    
    <>
      {/* PART - 1 */}
      <Hero texts={texts} background = {Background}/>
      {/* PART - 2 */}
      {filteredData.map((item, index) => (
        <Places
          key={index}
          Imgsrc={item.Imgsrc}
          Title={item.Title}
          Description={item.Description}
          learnMorePath={item.learnMorePath}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  );
}

export default MountainSection;