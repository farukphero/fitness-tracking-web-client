import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";


const Friends = () => {
    const { user, userInfo } = useContext(AuthContext);
    // console.log(userInfo)
    // console.log(userInfo)
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
        setFriendImage(image)
        setFriendEmail(email)
        setFriendName(name)
    }


    const sendMsg = (e) => {
        e.preventDefault();
        console.log("hi")
        const msg = e.target.msg.value;
        const message = {
            msg,
            user: user?.email,
            friendEmail,
            id: userInfo?._id
        }

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
    }


    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <label
                            htmlFor="my-drawer-2"

                        >
                            <Link to="/Community/AllUsers" className="text-xl ml-12">Add A New Friend</Link>
                            <hr className="text-xl ml-12" />
                            <h1 className="ml-12 text-xl">All friends</h1>
                        </label>

                    </div>
                    <div className="navbar-center">

                    </div>
                </div>
            </div>
            <div className="drawer drawer-mobile h-[585px] relative bg-slate-200 ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col absolute bottom-0 bg-black w-full">
                    {/* <!-- Page content here --> */}{" "}
                    <div className="">
                        <p className="text-red-900">{friendName}</p>
                        <div>
                            {
                                messages?.map(message => <div>
                                    {message?.id === userInfo._id ?

                                        <>
                                            <p className="text-white bg-blue-700 my-2">{message?.msg}</p>
                                        </> :
                                        <>
                                            <p className="text-white bg-red-700 my-2">{message?.msg}</p>
                                        </>


                                    }

                                </div>)
                            }
                        </div>
                        <form onSubmit={sendMsg}>
                            <input
                                type="text"
                                name="msg"
                                placeholder="Type here"
                                className="input input-bordered w-full lg:w-[1000px] ml-10"
                            />
                            <button type="submit" className="btn mt-5 ml-5 mb-5">Send</button>
                        </form>
                    </div>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 bg-base-100 text-base-content">
                        {
                            userInfo?.newFriend?.map((friendsDetails) => (
                                <div className="flex gap-3">
                                    <img
                                        className="h-8 w-8 rounded-full mb-3"
                                        src={friendsDetails.image}
                                        alt=""
                                    />
                                    <p onClick={() => Friend(friendsDetails.image, friendsDetails.name, friendsDetails.friendEmail)}>{friendsDetails.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friends;