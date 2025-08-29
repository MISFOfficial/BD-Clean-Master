import React from 'react';
import PricingCalculator from './ServiceAreas/PricingCalculator/PricingCalculator';

const Pricing = () => {
    return (
        <div>
            <div className='secondery-color py-16'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 '>
                    <PricingCalculator></PricingCalculator>
                </div>
            </div>
        </div>
    );
};

export default Pricing;