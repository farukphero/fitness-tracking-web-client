import React, { useContext } from "react";

import { useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CommunityFriends = ({ user }) => {
  const { userInfo } = useContext(AuthContext);
  const [infoDetails, setInfoDetails] = useState([]);
  //   const [postData, setPostData] = useState("");

  const handleAddFriend = () => {
    // setData("add");
    //  console.log(user._id)
    const friendData = {
      userId: userInfo?._id,
      firstName: userInfo?.firstName,
      lastName: userInfo?.lastName,
      photo: userInfo?.picture,
      senderEmail: userInfo?.email,
      receiverEmail: user?.email,
      accepted: false,
    };
    fetch("http://localhost:5000/friendRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friendData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setInfoDetails(data);
        }
      });
  };

  return (
    <div className="card w-64 h-96 bg-white shadow-xl">
      <figure className="">
        <img src={user?.picture} alt="" className="rounded-xl h-72 w-full" />
      </figure>

      <div className="p-3 items-center text-center">
        <h2 className="text-black font-semibold">
          {user?.firstName} {user?.lastName}
        </h2>
        <h1>{user?.email}</h1>
      </div>

      {!infoDetails.acknowledged ? (
        <div>
          <button
            onClick={() => handleAddFriend(infoDetails._id)}
            className="btn mt-2 mb-2 w-full btn-primary"
          >
            add friend
            
          </button>
          <button className="btn w-full btn-warning">Remove Friends</button>
        </div>
      ) : (
        <div>
          <button className="btn mt-2 mb-2 w-full disabled">
            Request sent
          </button>
          <button className="btn w-full btn-warning">Remove Friends</button>
        </div>
      )}
    </div>
  );
};

export default CommunityFriends;
