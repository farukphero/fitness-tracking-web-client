import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service, handleAge }) => {
  const { _id, name, description, image } = service;
 
  return (
    <div
      className="w-full my-10  shadow-xl image-full  pb-8 lg:pb-6  "
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
    >
      <figure>
        <img
          className="w-full lg:h-60 md:h-auto "
          src={image}
          alt="service-card"
        />
      </figure>
      <div className="card-body" style={{ height: "300px" }}>
        {/* <h2 className="card-title text-all-green font-semibold">{name}</h2> */}
        <h2 className="card-title text-all-green font-semibold">{name}</h2>
        <p>{description.slice(0, 170)}...</p>
        <div className="flex flex-col gap-6">
          <input
            onBlur={handleAge}
            className="rounded text-white border border-green-400 bg-gray-600 text-center h-10 mt-1"
            type="number"
            placeholder="Input your age"
          />
          <Link to={`/serviceDetails/${_id}`} state={{ from: { service } }}>
            
            <button className="border-2 px-6 py-3 border-green-600 btn-explore  rounded-md w-full">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
