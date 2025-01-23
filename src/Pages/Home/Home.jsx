import React from 'react';
import HeroSlider from '../Shared/HeroSlider';
import About from './About/About';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
           <HeroSlider></HeroSlider>
           <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;