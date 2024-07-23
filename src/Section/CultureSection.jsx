import React, { useEffect } from 'react';
import Hero from '../Component/BackgroundWithText/BackgroundWithText';
import Places from '../Component/HorizontalCard/HorizontalCard';
import Background from '/image/Culture1.jpg';
import { data } from '../Data/data';

function CultureSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredData = data.filter(item => item.categories.includes('culture'));

  return (
    <>
      <Hero texts={["Experience Nepal's Rich Culture", "Immerse in Nepal's Traditions", "Embrace the Spirit of Nepal", "Marvel at Nepal's Cultural Diversity"]} background={Background} />
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
export default CultureSection;