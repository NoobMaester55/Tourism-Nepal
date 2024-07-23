import React, { useEffect, useRef } from 'react';
import './ImageWithTextCarousel.css';
import { Link } from 'react-router-dom';

const ExploreSection = ({ carouselData }) => {
    const carouselRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailRef = useRef(null);
    const timeRef = useRef(null);

    const timeRunning = 1000;
    const timeAutoNext = 10000;
    let runNextAuto;
    let runTimeOut;

    useEffect(() => {
        const nextButton = document.getElementById('next');
        const prevButton = document.getElementById('prev');

        const showSlider = (type) => {
            const sliderItems = sliderRef.current.querySelectorAll('.item');
            const thumbnailItems = thumbnailRef.current.querySelectorAll('.item');

            if (type === 'next') {
                sliderRef.current.appendChild(sliderItems[0]);
                thumbnailRef.current.appendChild(thumbnailItems[0]);
                carouselRef.current.classList.add('next');
            } else {
                sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
                thumbnailRef.current.prepend(thumbnailItems[thumbnailItems.length - 1]);
                carouselRef.current.classList.add('prev');
            }
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselRef.current.classList.remove('next');
                carouselRef.current.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextButton.click();
            }, timeAutoNext);
        };

        nextButton.onclick = () => showSlider('next');
        prevButton.onclick = () => showSlider('prev');

        runNextAuto = setTimeout(() => {
            nextButton.click();
        }, timeAutoNext);

        return () => {
            clearTimeout(runTimeOut);
            clearTimeout(runNextAuto);
        };
    }, []);

    return (
        <div className="ExploreTourismCont">
            <div className="carousel" ref={carouselRef}>
                <div className="list" ref={sliderRef}>
                    {carouselData.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.imgSrc} alt={item.alt} />
                            <div className="content">
                                <div className="author">{item.author}</div>
                                <div className="title">{item.title}</div>
                                <div className="topic">{item.topic}</div>
                                <div className="des">{item.description}</div>
                                <div className="buttons">
                                    <Link to={item.seeMorePath}>
                                        <button className="SeeMoreButton">SEE MORE</button>
                                    </Link>
                                    {/* <button>SUBSCRIBE</button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="thumbnail" ref={thumbnailRef}>
                    {carouselData.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.imgSrc} alt={item.alt} />
                            <div className="content">
                                <div className="title">{item.thumbnailTitle}</div>
                                <div className="description">{item.thumbnailDescription}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                </div>
                <div className="time" ref={timeRef}></div>
            </div>
        </div>
    );
};

export default ExploreSection;
