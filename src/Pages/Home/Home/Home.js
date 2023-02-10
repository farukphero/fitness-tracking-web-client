import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle/useTitle";
import About from "../AboutUs/About";
import Banner from "../Banner/Banner";
import Branches from "../Branches/Branches";
import ContactUs from "../ContactUs/ContactUs";
import Review from "../Review/Review";
import Services from "../Services/Services";
import Leaderboard from "../../../Pages/OtherPages/Leaderboard/Leaderboard";
import Blog from "../Blog/Blog";
import Faqs from "../FAQ/FAQ";
import Goals from "../../OtherPages/Goals/Goals";
import FeatureClass from "../FeatureClass/FeatureClass";
 

const Home = () => {
  useTitle("Home");
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user ? (
        <Leaderboard></Leaderboard>
      ) : (
        <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
          <div className="w-11/12 mx-auto ">
            <Banner></Banner>
            <Services />
            <Goals></Goals>
            <Blog></Blog>
            <About />
            <Review></Review>
            {/* <FeatureClass></FeatureClass> */}
            <Branches></Branches>
            <ContactUs></ContactUs>
            <Faqs></Faqs>
            {/* <WeightCalculator></WeightCalculator> */}
           
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
