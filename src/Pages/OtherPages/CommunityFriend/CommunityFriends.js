import React, { useContext } from "react";

import { useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CommunityFriends = ({ user }) => {
  const { userInfo } = useContext(AuthContext);
  // console.log(userInfo);
  // const [data, setData] = useState("");
  const [postData, setPostData] = useState("");
  const [sendTo,setSendTo]=useState([])
  // const [sendFrom,setSendFrom]=useState("")
  console.log(sendTo)
 
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
 
    setSendTo((exgistingEmail)=>[...exgistingEmail,user?.eamil])
    // setSendFrom(user?.email)
    // fetch("https://fitness-tracking-web-server.vercel.app/friendRequest", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(friendData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

// email will be add (send to) array for sender person:
    // fetch(`https://fitness-tracking-web-server.vercel.app/user/${userInfo?.email}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(user?.email),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    

// email will be add (send from) array for receiver person:
    // fetch(`https://fitness-tracking-web-server.vercel.app/user/${user?.email}`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userInfo?.email),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));




    // fetch("https://fitness-tracking-web-server.vercel.app/friendRequest", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(friendData),
    // })
    //   .then((res) => res.json())
    //   .then((postData) => {
    //     if (postData.acknowledged) {
    //       setPostData(postData);
    //     }
    //     console.log(postData);
    //   });

 
    fetch("https://fitness-tracking-web-server.vercel.app/friendRequest", {
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
        }
        console.log(postData);
      });
    console.log(friendData);
 
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
        {/* <button
          onClick={handleSendRequest}
          className="btn mt-2 mb-2 w-full btn-primary"
        >
          Add Friend
        </button> */}




        {postData.acknowledged ? (
          <>
         
            <button className="py-3 rounded-md font-semibold px-5 mt-2 mb-2 w-full bg-secondary text-black">
              Request sent
            </button> 
            <button className="btn w-full btn-warning">Remove Friends</button>
          </>
        ) : (
          <>
            <button
              onClick={handleSendRequest}
              className="btn mt-2 mb-2 w-full btn-primary"
            >
              Add Friend
            </button>
            <button className="btn w-full btn-warning">Remove Friends</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CommunityFriends;
