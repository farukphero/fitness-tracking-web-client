import React, { useContext } from "react";

import { useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CommunityFriends = ({ user, reload, setReload }) => {
  const { userInfo } = useContext(AuthContext);
  // console.log(userInfo);
  // const [data, setData] = useState("");
  const [postData, setPostData] = useState("");
  const [sendTo, setSendTo] = useState([]);
  // const [sendFrom,setSendFrom]=useState("")
  // console.log(sendTo);

  const handleSendRequest = async () => {
    // setData("add");

    const friendData = {
      // rcvdata: userInfo?._id,
      // name: userInfo?.firstName,
      // photo: userInfo?.picture,
      senderEmail: userInfo?.email,
      receiverEmail: user?.email,
      accepted: false,
    };

    setSendTo((exgistingEmail) => [...exgistingEmail, user?.eamil]);

    fetch("http://localhost:5000/friendRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friendData),
    })
      .then((res) => res.json())
      .then((postData) => {
        if (postData.acknowledged) {
          setPostData(postData);
          // setReload(!reload);
        }
        // console.log(postData);
      });
    // console.log(friendData);
  };
  const checkRequest = (userEmail) => {
    // console.log(user.sendFrom, user.sendTo);
    const isSend = user?.sendTo?.find((request) => request === userEmail);
    const isFrom = user?.sendFrom?.find((request) => request === userEmail);
    if (isSend) {
      return "From";
    } else if (isFrom) {
      return "Send";
    } else if (!isSend && isFrom) {
      return "Friend";
    } else {
      return "No";
    }
  };

  const handleCancelRequest = () => {
    const friendData = {
      // rcvdata: userInfo?._id,
      // name: userInfo?.firstName,
      // photo: userInfo?.picture,
      senderEmail: userInfo?.email,
      receiverEmail: user?.email,
      accepted: false,
    };

    fetch("http://localhost:5000/cancelFriendRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friendData),
    })
      .then((res) => res.json())
      .then((postData) => {
        if (postData.acknowledged) {
          setPostData(postData);
          setReload(!reload);
        }
        // console.log(postData);
      });
  };
  const handleAcceptRequest = () => {
    const friendData = {
      senderEmail: userInfo?.email,
      receiverEmail: user?.email,
    };

    fetch("http://localhost:5000/acceptFriendRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friendData),
    })
      .then((res) => res.json())
      .then((postData) => {
        if (postData.acknowledged) {
          setPostData(postData);
          setReload(!reload);
        }
        // console.log(postData);
      });
  };
  return (
    <div className="card w-64 h-96 bg-white shadow-xl">
      <figure className="">
        <img src={user.picture} alt="" className="rounded-xl h-72 w-full" />
      </figure>

      <div className="p-3 items-center text-center">
        <h2 className="text-black font-semibold">
          {user?.firstName} {user?.lastName}
        </h2>
        {checkRequest(userInfo?.email) === "Send" && (
          <button
            onClick={handleCancelRequest}
            className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black"
          >
            Cancel Request
          </button>
        )}
        {checkRequest(userInfo?.email) === "From" && (
          <button
            onClick={handleAcceptRequest}
            className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black"
          >
            Accept Request
          </button>
        )}
        {checkRequest(userInfo?.email) === "No" && (
          <button
            onClick={handleSendRequest}
            className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black"
          >
            Add Friend
          </button>
        )}
      </div>
    </div>
  );
};

export default CommunityFriends;
