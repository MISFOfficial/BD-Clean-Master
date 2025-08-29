import React from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import Pricing from './Pricing/Pricing';
import ServiceGuide from './ServiceGuide/ServiceGuide';
import SafetyInfo from './SafetyInfo/SafetyInfo';
import Gallery from './Gallery/Gallery';
import ServiceFAQ from './ServiceFAQ/ServiceFAQ';
import BookNowWidget from './BookNowWidget/BookNowWidget';

const Services = () => {
    return (
        <div>
            <div className='secondery-color-2 py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 '>
                    <ServiceDetail></ServiceDetail>
                </div>
            </div>

            <div className='secondery-color py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 '>
                    <Pricing></Pricing>
                </div>
            </div>

            <div className='secondery-color-2 py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 '>
                    <ServiceGuide></ServiceGuide>
                </div>
            </div>

            <div className='secondery-color py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 '>
                    <SafetyInfo></SafetyInfo>
                </div>
            </div>

            <div className='secondery-color-2 py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 '>
                    <Gallery></Gallery>
                </div>
            </div>

            <div className='secondery-color py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 '>
                    <BookNowWidget></BookNowWidget>
                </div>
            </div>

            <div className='secondery-color py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 '>
                    <ServiceFAQ></ServiceFAQ>
                </div>
            </div>

        </div>
    );
};

export default Services;