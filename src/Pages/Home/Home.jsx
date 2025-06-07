import React from 'react';

import Hero from './Hero';
import Trusted from './Trusted';
import HowItWorks from './HowItWorks ';
import WhyChooseFixitron from './WhyChooseFixitron';
import Review from './Reviews';
import AllServices from '../AllServices/AllServices';
import PopularServices from './PopularServices';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularServices></PopularServices>
            <Trusted></Trusted>
            <HowItWorks></HowItWorks>
            <WhyChooseFixitron></WhyChooseFixitron>
            <Review></Review>
        </div>
    );
};

export default Home;