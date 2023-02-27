import React, { useContext, useState } from "react";
import { BiSend } from "react-icons/bi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

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
      fetch(`https://fitness-tracking-web-server.vercel.app/getMessages/${user?.email}/${friendEmail}`)
        .then((res) => res.json())
        .then((data) => {
          refetch()
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
    const msg = e.target.msg.value;
    const message = {
      msg,
      user: user?.email,
      friendEmail,
      id: userInfo?._id,
      image: userInfo?.picture,
    };

    fetch("https://fitness-tracking-web-server.vercel.app/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((res) => res.json())
      .then((data) => refetch());
    e.target.reset();
    refetch()
  };
  return (
    <section>
        <div>
        <div>
          <div className="navbar bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
            <div className="navbar-start">
              <label htmlFor="my-drawer-2">
                <Link to="/Community/AllUsers" className="text-xl md:ml-12">
                  Add A New Friend
                </Link>
                <hr className="text-xl md:ml-12" />
                <h1 className="md:ml-12 text-xl">All friends</h1>
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
            <div>
              <ScrollToBottom>
                <div>
                  <div className="mb-52 mt-20">
                    {
                      userInfo?.newFriend?.length > 0 ?<>
                      {
                        friendName ? <>  {messages?.map((message) => (
                          <div>
                            {message?.id === userInfo._id ? (
                              <div className="flex gap-3 -mt-12 pt-2 absolute right-0 mr-10">
                                <p className="text-black bg-secondary p-2 rounded-md">
                                  {message?.msg}
                                </p>
                                <img
                                  className="h-8 w-8 rounded-full "
                                  src={message?.image}
                                  alt=""
                                />
                              </div>
                            ) : (
                              <div className="flex gap-3 mt-10 ml-10 my-14 pt-2">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={message?.image}
                                  alt=""
                                />
                                <p className="text-black bg-gray-50 p-2 rounded-md">
                                  {message?.msg}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}</>: <p className="text-xl text-black text-center mt-6">Please select a friend to continue the conversation.</p>
                      }
                      
                      {messages?.map((message) => (
                        <div>
                          {message?.id === userInfo._id ? (
                            <div className="flex gap-3 -mt-12 pt-2 absolute right-0 mr-10">
                              <p className="text-black bg-secondary p-2 rounded-md">
                                {message?.msg}
                              </p>
                              <img
                                className="h-8 w-8 rounded-full "
                                src={message?.image}
                                alt=""
                              />
                            </div>
                          ) : (
                            <div className="flex gap-3 mt-10 ml-10 my-14 pt-2">
                              <img
                                className="h-8 w-8 rounded-full"
                                src={message?.image}
                                alt=""
                              />
                              <p className="text-black bg-gray-50 p-2 rounded-md">
                                {message?.msg}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}

                      </>:<div className="w-full mt-4">
                          <div className="flex items-center">
                            <div className="mx-auto ">

                              <p className="text-black text-2xl font-bold  mr-1">You have no friends yet.</p>
                              <span className="link text-blue-900 text-sm"><Link to='/Community/AllUsers'>Add Friend</Link></span>
                            </div>
                          </div>
                        </div> 
                    }
                  
                  </div>
                </div>
              </ScrollToBottom>
              <div className="absolute bottom-0 bg-gradient-to-r from-gray-700 via-teal-900 to-gray-700 w-full mt-10">
                <form className="flex my-5 mx-5 lg:mx-0" onSubmit={sendMsg}>
                  <input
                    type="text"
                    name="msg"
                    placeholder="Type Your Message here"
                    className="bg-warning input input-bordered w-full lg:w-[1000px] text-black"
                  />
                  <button
                    type="submit"
                    className="ml-5 mb-5 bg-secondary text-black px-5 py-2 rounded-lg"
                  >
                    <BiSend className="text-3xl"></BiSend>
                  </button>
                </form>
              </div>
              
            </div>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <div className="menu p-4 w-80 bg-gradient-to-r from-gray-700 via-teal-900 to-gray-700 text-base-content">
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
     
    </section>
  );
};

export default Friends;
