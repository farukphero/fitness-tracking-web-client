import React, { useContext } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Contexts/AuthProvider/AuthProvider";

const Friends = () => {
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

  return (
    <div>
      <div className="w-full navbar bg-base-300">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">Navbar Title</div>
        <div className="flex-none hidden lg:block">
          <ul className="menu menu-horizontal">
            {/* <!-- Navbar menu content here --> */}
            <li>
              <a>Navbar Item 1</a>
            </li>
            <li>
              <a>Navbar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* <!-- Page content here --> */}{" "}
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          <button>Send</button>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {friends?.map((friend) => (
              <div className="flex gap-2">
                <div>
                  {friend.image.map((friendImage) => (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={friendImage}
                      alt=""
                    />
                  ))()}
                </div>
                {/* <Link to={`/Friends/Friend/${friend._id}`}>  */}
                <div>
                  {friend?.name?.map((singleFriend) => (
                    <div className="mb-5 mt-1">
                      <p>{singleFriend}</p>
                    </div>
                  ))}
                </div>
                {/* </Link> */}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Friends;
