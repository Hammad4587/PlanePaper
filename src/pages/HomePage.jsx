import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Work from '../components/Work';
import Crew from '../components/Crew';
import Pricing from '../components/Pricing';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Work />
            <Crew />
            <Pricing />
        </>
    );
};

export default HomePage;
