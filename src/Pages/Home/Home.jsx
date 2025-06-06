import React from 'react';

import Hero from '../../Components/Hero';
import Trusted from '../../Components/Trusted';
import HowItWorks from '../../Components/HowItWorks ';
import WhyChooseFixitron from '../../Components/WhyChooseFixitron';
import Review from '../../Components/Reviews';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Trusted></Trusted>
            <HowItWorks></HowItWorks>
            <WhyChooseFixitron></WhyChooseFixitron>
            <Review></Review>
        </div>
    );
};

export default Home;