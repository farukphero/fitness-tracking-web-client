import React from "react";
import { MdOutlineRateReview } from "react-icons/md";

const SingleReviewCard = ({ reviews }) => {
  const { name, id, img, review } = reviews;

  return (
    <div className="card shadow-md shadow-green-600">
      <div className="card-body">
        <MdOutlineRateReview className="text-3xl text-all-green"></MdOutlineRateReview>
        <p className="text-white">{review}</p>
        <div className="flex  items-center mt-6">
          <div className="avatar mr-6">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt=""></img>
            </div>
          </div>
          <div>
            <h5 className="text-lg text-white">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleReviewCard;
