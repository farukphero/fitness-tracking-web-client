import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../../assets/about/images/review2.jpg";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import "./UserInfo.css";

const UserInfo = () => {
  const { user } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`https://fitness-tracking-web-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  return (
    
        <div className="lg:w-[900px]">
          <div className="avatar mr-10">
            <div className="w-28 lg:w-40 mb-10 ml-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userInfo?.picture} alt="" />
            </div>
          </div>
          <div className="text-white text-user-info">
            <h1>Name : {userInfo?.firstName} {userInfo?.lastName}</h1>
            <h1>Email : {userInfo?.email}</h1>
            <h1>Birthday : {userInfo?.birthday}</h1>
            <h1>Age : {userInfo?.age}</h1>
            <h1>Address : {userInfo?.permanentAddress}</h1>
            <h1>Phone : {userInfo?.phone}</h1>
            <h1>City : {userInfo?.city}</h1>

            <div className="mt-4 mb-8">
              <h1 className="mb-4  text-2xl text-green-400">WorkFlow : </h1>
              <div className="grid grid-cols-3 gap-8">
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
     
  );
};

export default UserInfo;
