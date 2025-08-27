import React from 'react';
import HeroSections from './Hero/HeroSections';

const Home = () => {
    return (
        <div>
            <div className='bg-[#00000092]'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0'>
                    <HeroSections></HeroSections>
                </div>
            </div>
        </div>
    );
};

export default Home;