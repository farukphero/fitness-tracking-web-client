import React from "react";

const CommunityFriends = ({ user }) => {
  return (
    <div className="card w-64 h-96 bg-white shadow-xl">
      <figure className="">
        <img src={user.picture} alt="" className="rounded-xl h-72 w-full" />
      </figure>

      <div className="p-3 items-center text-center">
        <h2 className="text-black font-semibold">
          {user?.firstName}
          {user?.lastName}
        </h2>

        <button className="btn mt-2 mb-2 w-full btn-primary">Add Friend</button>
        <button className="btn w-full btn-warning">Remove Friends</button>
      </div>
    </div>
  );
};

export default CommunityFriends;
