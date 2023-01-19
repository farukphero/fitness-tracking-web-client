import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { _id, name, description, image } = service;
  // console.log(service);
  return (
    <div className="w-full my-10  shadow-xl image-full rounded relative">
      <figure>
        <img
          className="w-full lg:h-60 md:h-auto"
          src={image}
          alt="service-card"
        />
      </figure>
      <div className="card-body" style={{ height: "300px" }}>
        <h2 className="card-title text-all-green font-semibold">{name}</h2>
        <p>{description.slice(0, 170)}...</p>
        <div>
         <Link to={`/serviceDetails/${_id}`} state={{ from: {service} }}> <button className="border-2 px-6 py-3 border-green-600 btn-explore  rounded-md ">
            Explore More
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
