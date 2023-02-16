import React, { useCallback } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { useLoaderData, useNavigate } from "react-router-dom";

const InstructorsDetails = () => {
  const navigate = useNavigate();
  const instructor = useLoaderData();

  const handleJoinMeeting = useCallback(() => {
    const num = Math.ceil(Math.random() * 9999999999)
    console.log(num);
    navigate(`/video/room/${num}`);
  }, [navigate]);

  const {
    _id,
    name,
    working_at,
    certifications,
    specialties,
    consultation_fee,
  } = instructor;

  console.log(instructor);

  return (
    <div className="card rounded-md flex md:flex-row w-11/12 my-6 mx-auto bg-base-100 justify-between items-center cursor-pointer p-6">
      <div className="basis-4/6 flex items-center">
        <div>
          <figure className="p-4">
            <img
              src="https://i.ibb.co/5FQQfXp/2023-01-15-01-22.png"
              alt="Shoes"
              className="rounded-xl w-44 h-44"
            />
          </figure>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col">
            <div className="flex items-center space-x-3">
              <h4 className="font-bold text-2xl">{name}</h4>
              <div className="badge badge-primary">online</div>
              <AiOutlineHeart className="text-2xl text-red-500" />
            </div>
            <p className="font-semibold text-xl">{certifications[0]}</p>
          </div>
          <div>
            <p className="text-semibold font-lg">specialties:</p>
            {specialties.map((special) => (
              <span>{special}, </span>
            ))}
            <h2 className="font-semibold text-lg">
              working at:{" "}
              <span className="font-semibold text-xl">{working_at}</span>{" "}
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 justify-center items-center basis-2/6">
        <div className="flex space-x-2 items-center">
          <div className="font-bold flex text-2xl">
            <p className="font-bold text-3xl">visit fee</p>
            <TbCurrencyTaka className="text-4xl font-bold" />{" "}
            <span>{consultation_fee.slice(1, 4)}</span>
          </div>
          <p>(incl. vat)</p>
          <BsArrowRight />
          <button
            onClick={handleJoinMeeting}
            className="btn font-bold btn-primary "
          >
            meet now
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorsDetails;
