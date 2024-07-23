import React, { useEffect, Suspense, lazy } from 'react';

// PART - 1
const Hero = lazy(() => import('../Component/BackgroundWithText/BackgroundWithText'));
import Adventure from '/image/Zipline.jpg';

// PART - 2
const Places = lazy(() => import('../Component/HorizontalCard/HorizontalCard'));
import { data } from '../Data/data';

function AdventureSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // PART - 1
  const texts = ["Discover Nepal's Thrilling Adventures", "Embark on Epic Journeys", "Experience the Ultimate Adventure", "Explore Nepal's Adventure Wonderland"];
  const filteredData = data.filter(item => item.categories.includes('adventure'));

  return (
    <>
      
        {/* PART - 1 */}
        <Hero texts={texts} background={Adventure} />
      
      
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
export default AdventureSection;
