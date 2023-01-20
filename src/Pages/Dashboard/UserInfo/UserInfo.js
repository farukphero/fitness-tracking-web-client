import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../../assets/about/images/review2.jpg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import "./UserInfo.css";

const UserInfo = () => {
  const { user } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState();

  // const params = useParams();
  // console.log(params);

  useEffect(() => {
    fetch(`http://localhost:5000/users/info?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  return (
    <div className="flex justify-center mb-16">
      <div className="ml-16 mt-24  ">
        <div>
          <div className="avatar">
            <div className="w-24 mb-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userInfo?.picture} alt="" />
            </div>
          </div>
          <div className="text-white text-user-info">
            <h1>Name : {userInfo?.firstname}</h1>
            <h1>Email : {userInfo?.email}</h1>
            <h1>Birthday : {userInfo?.birthday}</h1>
            <h1>Age : {userInfo?.age}</h1>
            <h1>Address : {userInfo?.permanentadress}</h1>
            <h1>Phone : {userInfo?.phone}</h1>
            <h1>City : {userInfo?.city}</h1>

            <div className="mt-4 mb-8">
              <h1 className="mb-4  text-2xl">WorkFlow : </h1>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div>
                  <h1 className="mb-2 font-bold">Diet</h1>
                  <div
                    className="radial-progress bg-sky-600 progress-user text-black border-1 border-black"
                    style={{ "--value": 70 }}
                  >
                    70%
                  </div>
                </div>
                <div>
                  <h1 className="mb-2 font-bold">Exercise</h1>
                  <div
                    className="radial-progress bg-red-400 progress-user text-black border-2 border-black"
                    style={{ "--value": 40 }}
                  >
                    40%
                  </div>
                </div>
                <div>
                  <h1 className="mb-2 font-bold">Activities</h1>
                  <div
                    className="radial-progress bg-emerald-600 progress-user text-black border-2 border-black"
                    style={{ "--value": 50 }}
                  >
                    50%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
