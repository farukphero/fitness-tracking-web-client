import React from "react";
import { AiFillStar } from "react-icons/ai";
import { TbCurrencyTaka } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SingleInstructor = ({ instructor }) => {
  const navigate = useNavigate();

  const { _id, name, certifications, specialties, consultation_fee,image } =
    instructor;

  const handleInstructor = () => {
    navigate(`/instructor/instructors/${_id}`);
  };

  return (
    <div
      onClick={handleInstructor}
      className="card rounded-md flex md:flex-row w-10/12 my-6 mx-auto bg-gradient-to-r from-gray-700 via-teal-900 to-gray-700 justify-center items-center cursor-pointer py-10"
    >
      <div className="basis-1/6">
        <figure className="p-4">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl w-32 h-32"
          />
        </figure>
      </div>

      <div className="flex flex-col gap-y-2 basis-1/3">
        <div>
          <h4 className="font-bold text-xl">{name}</h4>
          <p>{certifications[0]}</p>
        </div>
        <div>
          <p>Specialties:</p>
          {specialties.map((special) => (
            <span>{special}, </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-2 basis-1/3">
        <div>
          <p className="font-thin">Working in</p>
          <h4 className="font-bold text-lg">
            Upazila Health Complex,Faridganj,Chandpur
          </h4>
        </div>
        <div className="flex space-x-3">
          <div>
            <p className="font-thin">Total Experience.</p>
            <h4 className="font-semibold">5 years</h4>
          </div>
          <div>
            <p>Total Rating:(2384)</p>
            <div className="flex">
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
              <AiFillStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 justify-center items-center basis-1/4">
        <div className="flex space-x-2 items-center">
          <div className="font-bold flex text-2xl">
            <TbCurrencyTaka className="text-4xl font-bold" /> 
            <span>{consultation_fee.slice(1, 4)}</span>
          </div>
          <p>(including vat)</p>
          <BsArrowRight />
        </div>
        <p>Per Consultation</p>
      </div>
    </div>
  );
};

export default SingleInstructor;
