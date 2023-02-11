import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CommunityFriends from "./CommunityFriends";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CommunityFriend = () => {
  const { user, userInfo } = useContext(AuthContext);
  const [usersWithoutPresent, setUsersWithoutPresent] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        const result = data.filter(
          (users) => user.email !== users.email && !users?.accepted === true
        );
        setUsersWithoutPresent(result);
      });
  }, [reload, user?.accepted, user?.email, usersWithoutPresent]);
  // console.log(users?.accepted);

  return (
    <div className=" ">
      {/* <div>
        <div className="items-center mt-4 ml-6 mb-4 justify-start flex gap-4">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userInfo?.picture} alt="" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">
              {userInfo?.firstName}
              {userInfo?.lastName}
            </h1>
          </div>
        </div>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-28 mx-5">
        {usersWithoutPresent.map((user) => (
          <CommunityFriends
            key={user._id}
            user={user}
            setReload={setReload}
            reload={reload}
          ></CommunityFriends>
        ))}
      </div>
    </div>
  );
};

export default CommunityFriend;
