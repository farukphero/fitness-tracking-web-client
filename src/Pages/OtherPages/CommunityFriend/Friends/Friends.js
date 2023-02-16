import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import { BiSend } from 'react-icons/bi';
import ScrollToBottom from 'react-scroll-to-bottom';

const Friends = () => {
  const { user, userInfo } = useContext(AuthContext);
  const [friendImage, setFriendImage] = useState("");
  const [friendEmail, setFriendEmail] = useState("");
  const [friendName, setFriendName] = useState("");

  const {
    data: messages = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["messages.", user?.email, friendEmail],
    queryFn: () =>
      fetch(`http://localhost:5000/getMessages/${user?.email}/${friendEmail}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
          return data;
        }),
  });

  const Friend = (image, name, email) => {
    setFriendImage(image);
    setFriendEmail(email);
    setFriendName(name);
  };

  const sendMsg = (e) => {
    e.preventDefault();
    console.log("hi");
    const msg = e.target.msg.value;
    const message = {
      msg,
      user: user?.email,
      friendEmail,
      id: userInfo?._id,
      image:userInfo?.picture,
    };

    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    console.log(message);
    e.target.reset();
    refetch();
  };
  return (
    <div>
      <div>
        <div className="navbar bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
          <div className="navbar-start">
            <label htmlFor="my-drawer-2">
              <Link to="/Community/AllUsers" className="text-xl ml-12">
                Add A New Friend
              </Link>
              <hr className="text-xl ml-12" />
              <h1 className="ml-12 text-xl">All friends</h1>
            </label>
          </div>
          <div className="navbar-center">
          <p className="text-white text-2xl">{friendName}</p>
          </div>
        </div>
      </div>
      <div className="drawer drawer-mobile h-[585px] relative bg-warning">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col w-full">
          {/* <!-- Page content here --> */}
          <div >
          <ScrollToBottom>
          <div className="relative">
              {messages?.map((message) => (
                <div>
                  {message?.id === userInfo._id ? (
                    <div className="flex gap-3 mt-12 ml-10">
                    <img className="h-8 w-8 rounded-full" src={message?.image} alt="" />
                      <p className="text-black bg-secondary p-3 rounded-md bg-opacity-40 mb-8">
                        {message?.msg}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-3 absolute right-0 mt-10 mr-10">
                      <p className="text-black bg-green-400 p-3 rounded-md mb-5">
                        {message?.msg}
                      </p>
                      <img className="h-8 w-8 rounded-full" src={message?.image} alt="" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollToBottom>
            
            <div className="absolute bottom-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 w-full"> 
            <form className="flex my-5 mx-5 lg:mx-0" onSubmit={sendMsg}>
              <input
                type="text"
                name="msg"
                placeholder="Type Your Message here"
                className="bg-warning input input-bordered w-full lg:w-[1000px] text-black"
              />
              <button type="submit" className="  ml-5 mb-5 bg-secondary text-black px-5 py-2 rounded-lg">
               <BiSend className="text-3xl"></BiSend>
              </button>
            </form>
            </div>
           
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 text-base-content">
            {userInfo?.newFriend?.map((friendsDetails) => (
              <div className="flex gap-3">
                <img
                  className="h-8 w-8 rounded-full mb-3"
                  src={friendsDetails.image}
                  alt=""
                />
                <p
                  onClick={() =>
                    Friend(
                      friendsDetails.image,
                      friendsDetails.name,
                      friendsDetails.friendEmail
                    )
                  }
                >
                  {friendsDetails.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
