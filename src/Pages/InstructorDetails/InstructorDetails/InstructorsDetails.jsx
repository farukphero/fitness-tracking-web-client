import React, { useCallback, useState } from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";

const InstructorsDetails = () => {
  const navigate = useNavigate();
  const instructor = useLoaderData();
  // const [appointment, setAppointment] = useState("")

  const handleJoinMeeting = useCallback(() => {
    const num = Math.ceil(Math.random() * 9999999999);
    navigate(`/video/room/${num}`);
  }, [navigate]);

  const {
    _id,
    image,
    name,
    working_at,
    certifications,
    specialties,
    consultation_fee,
    availability,
  } = instructor;
 
  return (
   <section>
     <div className="card rounded-md flex md:flex-row w-11/12 my-6 mx-auto bg-gradient-to-r from-gray-700 via-teal-900 to-gray-700 justify-between items-center cursor-pointer p-6">
      <div className="basis-4/6 flex items-center">
        <div>
          <figure className="p-4">
            <img src={image} alt="Shoes" className="rounded-xl w-44 h-44" />
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
            <p className="text-semibold font-lg">Specialties:</p>
            {specialties.map((special) => (
              <span>{special}, </span>
            ))}
            <h2 className="font-semibold text-lg">
              working at:
              <span className="font-semibold text-xl">{working_at}</span>{" "}
            </h2>
            <p>Available Time: <br /><span>{availability?.Monday?.map(dat=><li>{dat}</li>)}</span></p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 justify-center items-center basis-2/6">
        <div className="flex space-x-2 items-center">
          <div className="font-bold flex text-2xl">
            <p className="font-bold text-3xl">Visit Fee</p>
            <TbCurrencyTaka className="text-4xl font-bold" />
            <span>{consultation_fee.slice(1, 4)}</span>
          </div>
          <p>(incl. vat)</p>
          <BsArrowRight />

         {/* <Link to={`/appointment/${_id}`}  state={{ from: { instructor } }}> */}
         <button
            onClick={handleJoinMeeting}
            className="btn font-bold btn-primary "
          >
            meet now
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
   
   </section>
  );
};

export default InstructorsDetails;
