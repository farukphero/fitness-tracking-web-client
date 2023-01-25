import React from 'react';
import About from '../AboutUs/About';
import Banner from '../Banner/Banner';
import Branches from '../Branches/Branches';
import ContactUs from '../ContactUs/ContactUs';
import Review from '../Review/Review';
import Services from '../Services/Services';
import WeightCalculator from '../WeightCalculator/WeightCalculator';
 
 
 const Home = () => {
  return (
    <div className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900'>
      <div className='w-11/12 mx-auto '>
      <Banner></Banner>
      <Services />
      <About />
      <Review></Review>
      <Branches></Branches>
      <ContactUs></ContactUs>
      <WeightCalculator></WeightCalculator>
 
      </div>
 
    </div>
  );
 };
 
 export default Home;
 
