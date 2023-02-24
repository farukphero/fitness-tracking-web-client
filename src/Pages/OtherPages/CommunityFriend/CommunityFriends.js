import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CommunityFriends = ({ user, reload, setReload }) => {
  const { userInfo } = useContext(AuthContext);
  // const [postData, setPostData] = useState("");
  const [sendTo, setSendTo] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSendRequest = async () => {
    const friendData = {
      senderEmail: userInfo?.email,
      receiverEmail: user?.email,
      accepted: false,
    };

    // setSendTo((exgistingEmail) => [...exgistingEmail, user?.eamil]);

    fetch("https://fitness-tracking-web-server.vercel.app/friendRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friendData),
    })
      .then((res) => res.json())
      .then((postData) => {
        setLoading(false);
        if (postData.acknowledged) {
          // setPostData(postData);
        }
      });
  };
  const checkRequest = (userEmail) => {
    const isSend = user?.sendTo?.find((request) => request === userEmail);
    const isFrom = user?.sendFrom?.find((request) => request === userEmail);
    const isFriend = user?.newFriend?.find(
      (request) => request.friendEmail === userEmail
    );
    // console.log(isFriend);
    // const accept = user?.accepted?.find((request) => request === userEmail);
    if (isFriend) {
      return "Friend";
    } else if (isSend) {
      return "From";
    } else if (isFrom) {
      return "Send";
    } else {
      return "No";
    }
  };

  const handleCancelRequest = () => {
    const friendData = {
      senderEmail: userInfo?.email,
      receiverEmail: user?.email,
      accepted: false,
    };

    fetch("https://fitness-tracking-web-server.vercel.app/cancelFriendRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friendData),
    })
      .then((res) => res.json())
      .then((postData) => {
        if (postData.acknowledged) {
          toast.success("Cancel");
          setReload(!reload);
        }
      });
  };
  const handleAcceptRequest = () => {
    const friendData = {
      senderEmail: userInfo?.email,
      firstName: userInfo?.firstName,
      lastName: userInfo?.lastName,
      receiverPicture: userInfo?.picture,
      receiverId: userInfo._id,
      receiverEmail: user?.email,
      displayName: user?.firstName + user.lastName,
      senderPicture: user?.picture,
      senderId: user._id,
    };

    fetch("https://fitness-tracking-web-server.vercel.app/acceptFriendRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(friendData),
    })
      .then((res) => res.json())
      .then((postData) => {
        if (postData.acknowledged) {
          toast.success("Friends Added")
          setReload(!reload);
        }
      });
  };
  if(checkRequest(userInfo?.email) === "Friend"){
    return ;
  }
  return (
    <div className="mt-10">
    <div className="p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded">
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center">
          <figure className="">
            <img src={user?.picture} alt="" className="rounded-xl h-32 w-32" />
          </figure>
        </div>
      </div>
      <h2 className="text-white font-semibold ml-4">
        {user?.firstName} {user?.lastName}
      </h2>
      <div className="p-3 items-center text-center">
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
            </button>
          </>
        )}
        {checkRequest(userInfo?.email) === "No" && (
          <button
            onClick={handleSendRequest}
            className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black"
          >
            Add Friend
          </button>
        )}
        {checkRequest(userInfo?.email) === "Friend" && (
          <button
            onClick={handleAcceptRequest}
            className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black"
          >
            Friend
          </button>
        )}
      </div>
    </div>
    <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
    <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
    {/* <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" /> */}
  </div>
  )
};

export default CommunityFriends;
