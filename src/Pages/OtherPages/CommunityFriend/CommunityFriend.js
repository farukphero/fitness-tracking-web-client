import React, { useContext, useEffect, useState } from "react";
import Loading from "../../../Components/Loading/Loading";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle/useTitle";
import CommunityFriends from "./CommunityFriends";

const CommunityFriend = () => {
  useTitle("Community/AllUsers");
  const { user } = useContext(AuthContext);
  const [usersWithoutPresent, setUsersWithoutPresent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [postperPage, setPostperPage] = useState(6);
 

  useEffect(() => {
    fetch("https://fitness-tracking-web-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter(
          (users) => user?.email !== users?.email
           
        );
        setLoading(false);
        setUsersWithoutPresent(result);
      });
  }, [reload, user?.accepted, user?.email, usersWithoutPresent]);
  

  const numberoftotalPage = Math.ceil(usersWithoutPresent.length / postperPage);
  const pages = [...Array(numberoftotalPage + 1).keys()].slice(1);

  const lastpostindex = currentPage * postperPage;
  const firstpostindex = lastpostindex - postperPage;
  const currentpost = usersWithoutPresent.slice(firstpostindex, lastpostindex);
  return (
    <div className="">
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative">
        {loading ? (
          <div className="absolute bottom-20 -left-28">
            <Loading></Loading>
          </div>
        ) : (
          currentpost.map((user) => (
            <CommunityFriends
              key={user._id}
              user={user}
              setReload={setReload}
              reload={reload}
              usersWithoutPresent={currentpost}
            ></CommunityFriends>
          ))
        )}
      </div>
      <div className="w-full text-center mt-5 mb-5 mx-auto">
        {pages.map((page, index) => {
          return (
            <button
              className="btn btn-active ml-3"
              key={index}
              onClick={() => setcurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityFriend;
