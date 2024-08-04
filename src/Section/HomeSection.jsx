import React, { useEffect } from 'react';
// import pageTransition from '../pagetransition'

import BlueAndRedText from '../Component/BlueAndRedText/BlueAndRedText'
//Part-1
import Hero from '../Component/BackgroundVideo/BackgroundVideo'
import Video from '/video/bgVideo.mp4'

//part 2
import About from '../Component/ParagraphWithHeader/ParagraphWithHeader'

//part 3
import Explore from '../Component/ImageWithTextCarousel/ImageWithTextCarousel'
import Adventure from '/image/Adventure.png'
import Culture from '/image/Culture.jpg'
import Mountain from '/image/Mountain.jpg'
import Nature from '/image/Nature.jpeg'
import Wildlife from '/image/Wildlife.jpg'

//part 4
import Places from '../Component/HorizontalCardScroll/HorizontalCardScroll'
import Kathmandu from '/image/kathmandu.jpg'
import Mustang from '/image/Mustang.jpg'
import Pokhara from '/image/Pokhara.jpg'
import Chitwan from '/image/Chitwan.jpg'
import Basecamp from '/image/baseCamp.jpg'
import Lumbini from '/image/Lumbini.jpg'


function HeroSection() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    //PART-3
    const carouselData = [
        {
            imgSrc: Nature,
            alt: 'Nature',
            author: '',
            title: 'Breathtaking Landscapes',
            topic: 'Nature',
            description: 'Nepal, nestled in the Himalayas, boasts breathtaking mountain landscapes, including Mount Everest, verdant valleys, and rich biodiversity. Its diverse ecosystems range from tropical lowlands to alpine highlands, making it a haven for nature enthusiasts and adventure seekers alike.',
            thumbnailTitle: 'Nature',
            seeMorePath: "/Nature"
        },
        {
            imgSrc: Culture,
            alt: 'Culture',
            author: '',
            title: 'Colorful traditions',
            topic: 'Culture',
            description: 'Nepal`s culture is a vibrant mix of Hindu and Buddhist traditions, reflected in its festivals, art, and architecture. Known for its warm hospitality, the country celebrates diverse customs and languages, making its cultural landscape rich and unique.',
            thumbnailTitle: 'Culture',
            seeMorePath: "/Culture"
        },
        {
            imgSrc: Adventure,
            alt: 'Adventure',
            author: '',
            title: 'Thrilling expeditions',
            topic: 'Adventure',
            description: 'Exploring Nepal`s Himalayas through trekking, bungee jumping, paragliding, and ziplining provided a thrilling adventure filled with breathtaking landscapes and cultural immersion, making it an unforgettable journey of adrenaline and exploration.',
            thumbnailTitle: 'Adventure',
            seeMorePath: "/Adventure"
        },
        {
            imgSrc: Wildlife,
            alt: 'Wildlife',
            author: '',
            title: 'Rich biodiversity.',
            topic: 'Wildlife',
            description: 'Nepal boasts a diverse array of wildlife, from majestic Bengal tigers and elusive snow leopards to endangered one-horned rhinoceroses and colorful bird species like the Himalayan monal. Its national parks and reserves offer a unique opportunity to encounter these fascinating creatures in their natural habitats.',
            thumbnailTitle: 'Wildlife',
            seeMorePath: "/Wildlife"
        },
        {
            imgSrc: Mountain,
            alt: 'Mountain',
            author: '',
            title: 'Himalayan peaks.',
            topic: 'Mountains',
            description: 'Nepal boasts a diverse array of wildlife, from majestic Bengal tigers and elusive snow leopards to endangered one-horned rhinoceroses and colorful bird species like the Himalayan monal. Its national parks and reserves offer a unique opportunity to encounter these fascinating creatures in their natural habitats.',
            thumbnailTitle: 'Mountains',
            seeMorePath: "/Mountain"
        },
    ];
    // PART-4
    const places = [
        { imageSource: Kathmandu, description: "KATHMANDU" ,path : "/Kathmandu"},
        { imageSource: Mustang, description: "MUSTANG" ,path : "/Mustang"},
        { imageSource: Pokhara, description: "POKHARA" ,path : "/Pokhara"},
        { imageSource: Chitwan, description: "CHITWAN" ,path : "/Chitwan"},
        { imageSource: Basecamp, description: "EVEREST BASE CAMP" ,path : "/EverestBaseCamp"},
        { imageSource: Lumbini, description: "LUMBINI" ,path : "/Lumbini"},
    ];
    return (
        <>
            {/* PART-1 */}
            <Hero backgroundVideo={Video} />
            {/* PART-2 */}
            <About
                header={"Tourism In Nepal"}
                paragraph1={"Nestled in the lap of the Himalayas, Nepal is a country of unparalleled natural beauty and cultural richness. Known for its towering mountains, including the world`s highest peak, Mount Everest, Nepal offers a diverse array of experiences for travelers. Its breathtaking landscapes range from lush subtropical forests to arid high-altitude deserts."}
                paragraph2={"Tourists flock to Nepal for its adventure activities, such as trekking, mountaineering, and white-water rafting, but the country's charm extends far beyond its rugged terrain. Nepal`s vibrant cities, ancient temples, and warm, hospitable people provide a deep and enriching cultural immersion."}
            />
            {/* PART-3 */}
            <div className='fadeIn1'>
                <BlueAndRedText Text={"Explore"} />
            </div>
            <Explore carouselData={carouselData} />

            {/* PART-4 */}
            <div className='fadeIn1'>
                <BlueAndRedText Text={"Popular Tourist Destinations"} />
            </div>
            <Places places={places} />
        </>
    );
}

export default HeroSection;