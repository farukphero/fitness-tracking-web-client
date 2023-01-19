 import React from 'react';
import About from '../AboutUs/About';
import Banner from '../Banner/Banner';
import Branches from '../Branches/Branches';
import ContactUs from '../ContactUs/ContactUs';
import Review from '../Review/Review';
import Services from '../Services/Services';
 
 const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Banner></Banner>
      <Services />
      <About />
      <Review></Review>
      <Branches></Branches>
      <ContactUs></ContactUs>
   
    </div>
  );
 };
 
 export default Home;