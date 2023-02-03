import React from "react";

const GetComment = ({ comments }) => {
  const { commentuser, comment, photo } = comments;

  return (
    <div className="card lg:w-1/2 p-8 mt-4  grid sm:grid-cols-1 lg:grid-cols-2 position  shadow-xl shadow-amber-600">
      <div className="top-1/3 bg-base-100 flex py-5">
        <div className="flex avatar w-12 ml-3">
          <img className="w-10 h-10 rounded-full" src={photo} alt="" />{" "}
          <p className="ml-3 font-semibold text-xl">{commentuser}</p>
          <br />
        </div>
      </div>
      <div className="">
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default GetComment;
