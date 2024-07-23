import React, { useEffect } from 'react';
import Hero from '../Component/BackgroundWithText/BackgroundWithText';
import Places from '../Component/HorizontalCard/HorizontalCard';
import Background from '/image/Wildlife.jpeg';
import { data } from '../Data/data';

export default function WildlifeSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = data.filter(item => item.categories.includes('wildlife'));

  return (
    <>
      <Hero texts={["Explore Nepal's Diverse Wildlife", "Witness Nepal's Majestic Fauna", "Encounter Nepal's Exotic Animals", "Unveil Nepal's Untamed Wilderness"]} background={Background} />
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