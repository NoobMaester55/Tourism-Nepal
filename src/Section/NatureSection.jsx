import React, { useEffect } from 'react';
//PART - 1
import Hero from '../Component/BackgroundWithText/BackgroundWithText'
import Background from '/image/Nature2.jpeg'
import Places from '../Component/HorizontalCard/HorizontalCard';
//PART - 2
import { data } from '../Data/data';

function NatureSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // PART - 1
  const texts = ["Discover Nepal's Natural Wonders", "Experience the Beauty of Nepal", "Journey Through Nepal's Scenic Trails", "Unveil Nepal's Hidden Nature Gems"];

 
  const filteredData = data.filter(item => item.categories.includes('nature'));
  return (
    <>
      {/* PART - 1 */}
      <Hero texts={texts} background={Background} />
      {/* PART-2 */}
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
  )
}
export default NatureSection;