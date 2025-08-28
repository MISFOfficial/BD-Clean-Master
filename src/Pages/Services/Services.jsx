import React from 'react';
import ServiceDetail from './ServiceDetail/ServiceDetail';
import Pricing from './Pricing/Pricing';
import ServiceGuide from './ServiceGuide/ServiceGuide';
import SafetyInfo from './SafetyInfo/SafetyInfo';

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

        </div>
    );
};

export default Services;