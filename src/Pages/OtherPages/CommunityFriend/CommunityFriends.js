import React, { useContext } from "react";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CommunityFriends = ({ user, reload, setReload }) => {
  const { userInfo } = useContext(AuthContext);
  // const [postData, setPostData] = useState("");
  const [sendTo, setSendTo] = useState([]);
  const [loading, setLoading] = useState(true)
  const [accept, setAccept] = useState(false)

  const handleSendRequest = async () => {
    const friendData = {
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
        setLoading(false)
        if (postData.acknowledged) {
          // setPostData(postData);
        }
      });
  };
  const checkRequest = (userEmail) => {
    const isSend = user?.sendTo?.find((request) => request === userEmail);
    const isFrom = user?.sendFrom?.find((request) => request === userEmail);
    // const accept = user?.accepted?.find((request) => request === userEmail);
    if (isSend) {
      return "From";
    } else if (isFrom) {
      return "Send";
    } 
    else {
      return "No";
    }
  };

  const handleCancelRequest = () => {
    const friendData = {
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
           toast.success("cancel")
          setReload(!reload);
        }
      });
  };
  const handleAcceptRequest = () => {
    const friendData = {
      senderEmail: userInfo?.email,
      firstName: userInfo?.firstName,
      receiverPicture: userInfo?.picture,
      lastName : userInfo?.lastName,
      receiverEmail: user?.email,
      displayName:user?.firstName + user.lastName,
      senderPicture: user?.picture
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
          // setPostData(postData);
          setAccept(true)
          setReload(!reload);
        }
      });
  };
  return (
    <div className="card bg-white shadow-xl">
      <figure className="">
        <img src={user.picture} alt="" className="rounded-xl h-52 w-full" />
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
         <>
          <button
            onClick={handleAcceptRequest}
            className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black"
          >
            Accept Request
          </button>
          <button
            onClick={handleCancelRequest}
            className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black"
          >
            Cancel Request
          </button></>
        )}
        {checkRequest(userInfo?.email) === "No" && (
          <button
            onClick={handleSendRequest}
            className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black"
          >
             Add Friend
          </button>
        )}
        {/* {checkRequest(userInfo?.email) === "Friend" (
          <button
            onClick={handleAcceptRequest}
            className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black"
          >
             Friend
          </button>
        )} */}
      </div>
    </div>
  );
};

export default CommunityFriends;
