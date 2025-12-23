
import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Developments from '../components/sections/Developments';
import Amenities from '../components/sections/Amenities';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <Hero />
      <About />
      <Developments />
      <Amenities />
    </div>
  );
};

export default Home;
