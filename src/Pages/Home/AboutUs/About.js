import React from "react";
import image from "../../../assets/about_us.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="pt-16" id='about'>
      <h1 className="text-center text-all-green text-4xl font-bold mb-6">
        About Us
      </h1>
      <div className=" grid grid-cols-1 lg:grid-cols-2  gap-4 text-white">
        <div>
          <img className="w-full lg:w-4/5" src={image} alt=""></img>
        </div>
        <div className="mt-2">
          <h1 className="text-about">
            {" "}
            Fitness providers should operate in accordance with industry
            standards, including the National Code of Practice for the Health
            and Fitness Industry developed by AUSactive.In the whole city we are
            build first Fitness center. Make sure the fitness centre caters for
            the kinds of activities you like and that meet your personal fitness
            goals – for example, personal training, free weights, aerobics
            classes, Pilates and swimming.It is a health, recreational, and
            social facility geared towards exercise, sports, and other physical
            activities. It may be a for-profit commercial facility or a
            community- or institutionally-supported center. A successful
            facility will accommodate both the serious athlete and the casual
            recreational user.
          </h1>
          <hr className=" w-full lg:w-3/4 mt-2"></hr>
        </div>
      </div>
    </div>
  );
};

export default About;
