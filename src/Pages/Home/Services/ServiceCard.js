import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({ service, handleAge }) => {
  const { _id, name, description, image } = service;
  console.log(name);
  return (
    <div
      className="w-full my-10  shadow-xl image-full  "
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
        {/* image hover : rounded relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 */}
      </figure>
      <div className="card-body" style={{ height: "300px" }}>
        {/* <h2 className="card-title text-all-green font-semibold">{name}</h2> */}
        <h2 className="card-title text-all-green font-semibold">{name}</h2>
        <p>{description.slice(0, 170)}...</p>
        <div className="flex gap-6">
          <Link to={`/serviceDetails/${_id}`} state={{ from:  {service } }}>
            {" "}
            <button className="border-2 px-6 py-3 border-green-600 btn-explore  rounded-md ">
              Explore More
            </button>
          </Link>
          <input onBlur={handleAge} className="rounded text-white border border-green-400 bg-gray-300 text-center h-10 mt-1" type='number' placeholder="Input your age"/>
        </div>
          <div className=' '>
          <h3><span className='text-yellow-400'>Note:</span> To see details only for you please input your age below then click on Explore more button</h3>
        
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
