<<<<<<< HEAD
import React from 'react';
import ContactUs from '../ContactUs/ContactUs';
import Header from '../../../Components/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ContactUs></ContactUs>
        </div>
    );
=======
import React from "react";
import About from "../AboutUs/About";
import Banner from "../Banner/Banner";
import Branches from "../Branches/Branches/Branches";
import ContactUs from "../ContactUs/ContactUs";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner></Banner>
      <Services />
      <About />
      <Review></Review>
      <ContactUs></ContactUs>
      <Branches></Branches>
    </div>
  );
>>>>>>> 943546e939a3040d07ed1f22dea76aefdbc77c75
};

export default Home;
