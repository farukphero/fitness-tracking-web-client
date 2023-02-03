import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import "./UserInfo.css";

const UserInfo = () => {
  const { user } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState();

  const [isEditing, setIsEditing] = useState(false);

  const handleEdittoggle = () => {
    setIsEditing((prev) => !prev);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const birthday = form.birthday.value;
    const age = form.age.value;
    const permanentAddress = form.permanentAddress.value;
    const phone = form.phone.value;
    const city = form.city.value;

    const newuserInfo = {
      firstName,
      lastName,
      birthday,
      age,
      permanentAddress,
      phone,
      city,
    };
    console.log(JSON.stringify(newuserInfo));
    console.log(newuserInfo);
    console.log(user.email);

    fetch(`http://localhost:5000/users/edit/${user?.email}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newuserInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    console.log(newuserInfo);
    // setUserInfo(newuserInfo);
    setUserInfo((prev) => {
      return {
        ...prev,
        ...newuserInfo,
      };
    });
    setIsEditing(false);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  return (
    <div className="w-8/12 mx-auto my-20">
      <div className="lg:w-[900px] ">
        <div>
          <div className="avatar mr-10">
            <div className="w-20 lg:w-32 mb-10 ml-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userInfo?.picture} alt="" />
            </div>
          </div>
          <div className="text-white text-user-info">
            {isEditing ? (
              <form
                className="flex flex-col w-56 gap-3"
                onSubmit={handleSubmit}
              >
                <label>First name</label>
                <input
                  className="bg-gray-400 rounded-lg text-black p-2"
                  name="firstName"
                  defaultValue={userInfo?.firstName}
                />
                <label>last name</label>
                <input
                  className="bg-gray-400 rounded-lg text-black p-2"
                  name="lastName"
                  defaultValue={userInfo?.lastName}
                />

                <label>birthday</label>
                <input
                  className="bg-gray-400 rounded-lg text-black p-2"
                  defaultValue={userInfo?.birthday}
                  name="birthday"
                />
                <label>age</label>
                <input
                  className="bg-gray-400 rounded-lg text-black p-2"
                  defaultValue={userInfo?.age}
                  name="age"
                />
                <label>Address</label>
                <input
                  className="bg-gray-400 rounded-lg text-black p-2"
                  defaultValue={userInfo?.permanentAddress}
                  name="permanentAddress"
                />
                <label>phone</label>
                <input
                  className="bg-gray-400 rounded-lg text-black p-2"
                  defaultValue={userInfo?.phone}
                  name="phone"
                />
                <label>city</label>
                <input
                  className="bg-gray-400 rounded-lg text-black p-2"
                  defaultValue={userInfo?.city}
                  name="city"
                />
                <button className="btn btn-explore">save</button>
                <button className="btn btn-explore" onClick={handleEdittoggle}>
                  cancel
                </button>
              </form>
            ) : (
              <>
                <div>
                  <h1>
                    Name : {userInfo?.firstName} {userInfo?.lastName}
                  </h1>

                  <h1>Email : {userInfo?.email}</h1>
                  <h1>Birthday : {userInfo?.birthday}</h1>

                  <h1>Age : {userInfo?.age}</h1>
                  <h1>Address : {userInfo?.permanentAddress}</h1>
                  <h1>Phone : {userInfo?.phone}</h1>
                  <h1>City : {userInfo?.city}</h1>
                </div>

                <div className="ml-48">
                  <button
                    onClick={handleEdittoggle}
                    className="btn btn-explore"
                  >
                    Edit
                  </button>
                </div>
              </>
            )}

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
      </div>
    </div>
  );
};

export default UserInfo;