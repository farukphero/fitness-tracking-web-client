import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../../Hooks/useTitle/useTitle";

const Friends = () => {
  useTitle("Community/Friends")
  const { user } = useContext(AuthContext);
  const { data: friends = [], refetch } = useQuery({
    queryKey: ["tutorials", user?.email],
    queryFn: () =>
      fetch(`http://localhost:5000/friends?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          // setLoading(false)
          // console.log(data)
          refetch();
          return data;
        }),
  });
  // console.log(friends)
  return (
    <div>
      <div>
        <div className="navbar bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
          <div className="navbar-start">
            <label htmlFor="my-drawer-2">
              <Link to="/Community/AllUsers" className="text-xl ml-12">
                Add A New Friend
              </Link>
              <hr className="text-xl ml-12" />
              <h1 className="ml-12 text-xl">All friends</h1>
            </label>
          </div>
          <div className="navbar-center"></div>
        </div>
      </div>
      <div className="drawer drawer-mobile h-[585px]  bg-warning">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col relative">
          {/* <!-- Page content here --> */} 
          <div className="absolute bottom-0 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 w-full">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered bg-slate-200  w-full lg:w-[1000px]"
            />
            <button className="btn mt-5 ml-5 mb-5">Send</button>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-base-content">
            {friends?.map((friend) =>
              friend?.newFriend?.map((friendsDetails) => (
                <div className="flex gap-3">
                  <img
                    className="h-8 w-8 rounded-full mb-3"
                    src={friendsDetails.image}
                    alt=""
                  />
                  <li>{friendsDetails.name}</li>
                </div>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Friends;
