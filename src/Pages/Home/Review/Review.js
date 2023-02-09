import React from "react";

import image1 from "../../../assets/about/images/review-1.jpg";
import image2 from "../../../assets/about/images/review2.jpg";
import image3 from "../../../assets/about/images/review2.jpg";
import image4 from "../../../assets/about/images/review4.jpg";
import SingleReviewCard from "./SingleReviewCard";
import "./Review.css";

const Review = () => {
  const allReview = [
    {
      id: 1,
      img: image1,
      name: "Adil Khan",
      review:
        "This is a great website for fitness .I hope everyone can enjoyed it very much.The trainer of this instuite is outsanding. ",
    },
    {
      id: 2,
      img: image2,
      name: "Nadil Ahmed",
      review:
        "Fitness is very important for us .We should take care about it and about my fitness this website help me lot of. ",
    },
    {
      id: 3,
      img: image3,
      name: "Harry kane",
      review:
        "The service of this website is to good .It helps me lot of .I think lot of people can takes help from this website ",
    },
    {
      id: 4,
      img: image4,
      name: "Asfaq Nifun",
      review:
        "In city this website gives us a great environment for fitness.  If anyone can use this website properly he can make a great fitness",
    },
  ];
  return (
    <div
      className="mt-20"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
    >
      <h2 className=" text-center text-4xl font-semibold py-5 mb-8 text-all-green">
        {" "}
        Users Reviews
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-4  bg-gray-800 pl-8 pt-8 gap-4 pb-8 pr-8 ">
        {allReview.map((reviews) => (
          <SingleReviewCard reviews={reviews}></SingleReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
