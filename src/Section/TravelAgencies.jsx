// TravelAgencies.js
import React from 'react';
import Card from '../Component/Card4';
import TravelAgenciesData from '../Data/TravelAgenciesData';
import { useInView } from 'react-intersection-observer';

export default function TravelAgencies() {
    const backgroundStyle = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i0.wp.com/www.alphaadventuretreks.com/blog/wp-content/uploads/2023/07/Nepal-Tour-Packages-From-Malaysia.jpeg?fit=1200%2C800&ssl=1) no-repeat center',
        backgroundSize: 'cover'
    };

    return (
        <div>
            <div style={backgroundStyle}
                className="py-52 px-1 md:px-8 text-center relative text-white font-bold text-2xl md:text-3xl overflow-auto">
                <h1 className="pb-4">Search for Travel Agencies</h1>
                <div className="w-11/12 md:w-3/4 lg:max-w-3xl m-auto">
                    <div className="relative z-30 text-base text-black">
                        <input 
                            type="text" 
                            placeholder="Search for Travel Agencies" 
                            className="mt-2 shadow-md focus:outline-none rounded-2xl py-3 px-6 block w-full" 
                        />
                        <div
                            className="text-left absolute top-10 rounded-t-none rounded-b-2xl shadow bg-white divide-y w-full max-h-40 overflow-auto">
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TravelAgenciesData.map((card, index) => (
                    <LazyCard key={index} {...card} />
                ))}
            </div>
        </div>
    );
}

const LazyCard = (props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref}>
            {inView ? <Card {...props} /> : null}
        </div>
    );
};
