// src/pages/Home.jsx
import React from 'react';
import Hero from '../Hero';
import Services from '../Services';
import HowItWorks from '../HowItWorks';
import TopDoctors from '../TopDoctors';
import Testimonials from '../Testimonials';
import MedicineCategories from '../MedicineCategories';
import MobileApp from '../MobileApp';
import Newsletter from '../Newsletter';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Services />
      <HowItWorks />
      <TopDoctors />
      <MedicineCategories />
      <Testimonials />
      <MobileApp />
      <Newsletter />
    </div>
  );
};

export default Home;