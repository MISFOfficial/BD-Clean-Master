import React from 'react';
import HeroSections from './Hero/HeroSections';
import ServiceTiles from './ServiceTiles/ServiceTiles';
import HowItWorks from './HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            <div className='bg-[#00000092]'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0'>
                    <HeroSections></HeroSections>
                </div>
            </div>
            <div className='py-16 bg-white'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0'>
                    <ServiceTiles></ServiceTiles>
                </div>
            </div>

            <div className='py-16 secondery-color-2'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0'>
                    <HowItWorks></HowItWorks>
                </div>
            </div>
        </div>
    );
};

export default Home;