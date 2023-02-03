import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ImFolderPlus } from "react-icons/im";

import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import "./UserInfo.css";

const UserInfo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { user } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  const handleEdittoggle = () => {
    setIsEditing((prev) => !prev);
  };
 
  // const handleSubmitt = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const firstName = form.firstName.value;
  //   const lastName = form.lastName.value;
  //   const birthday = form.birthday.value;
  //   const age = form.age.value;
  //   const permanentAddress = form.permanentAddress.value;
  //   const phone = form.phone.value;
  //   const city = form.city.value;

  //   const newuserInfo = {
  //     firstName,
  //     lastName,
  //     birthday,
  //     age,
  //     permanentAddress,
  //     phone,
  //     city,
  //   };
  //   console.log(JSON.stringify(newuserInfo));
  //   console.log(newuserInfo);
  //   console.log(user.email);

  //   fetch(`http://localhost:5000/users/edit/${user?.email}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newuserInfo),
 
  const handleEdit = (data) => {
    // event.preventDefault();

    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?expiration=600&key=c49cb06155adb366044d147043658858";
    fetch(url, {
      method: "POST",
      body: formData,
 
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);

        const newUserInfo = {
          firstName: data.firstName,
          lastName: data.lastName,
          birthday: data.birthday,
          age: data.age,
          permanentAddress: data.permanentAddress,
          phone: data.phone,
          city: data.city,
          picture: imgData.data.url,
        };
        console.log(JSON.stringify(newUserInfo));
        console.log(newUserInfo);
        // console.log(user.email);

        fetch(`https://fitness-tracking-web-server.vercel.app/users/edit/${user?.email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        setUserInfo((prev) => {
          return {
            ...prev,
            ...newUserInfo,
          };
        });
      });
    setIsEditing(false);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);
  return (
    <div className="w-8/12 mx-auto my-20 -mt-5 lg:mt-20 scale-75 lg:scale-100">
      <div className="lg:w-[900px] ">
        <div>
          <div className="avatar mr-10">
            <div className="w-28 lg:w-32 mb-10 ml-16 lg:ml-24 lg:mt-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userInfo?.picture} alt="" />
            </div>
          </div>
          <div className="text-white text-user-info relative">
            {isEditing ? (
              <form
                className="flex flex-col lg:w-96 gap-3 "
                onSubmit={handleSubmit(handleEdit)}
              >
                <div className="absolute -top-8 left-16 lg:left-[100px] mt-1">
                  <input
                    className="hidden"
                    type="file"
                    id="file"
                    accept="image/*"
                    placeholder="photo"
                    {...register("image", { required: true })}
                    // name="picture"
                  />
                  <label
                    htmlFor="file"
                    className="flex btn btn-xs font-bold text-xs btn-outline btn-explore text-white"
                  >
                    <small> Upload Photo</small> 
                    <ImFolderPlus className="h-6 w-7 p-1" />
                  </label>
                </div>
                <div className="flex lg:gap-8 -ml-28 lg:ml-0 gap-2 mt-3">
                  <div>
                    <label>First name</label>
                    <input
                      className="bg-gray-400 rounded-lg text-black p-2"
                      // name="firstName"
                      defaultValue={userInfo?.firstName}
                      {...register("firstName", { required: true })}
                    />
                  </div>
                  <div>
                    <label>last name</label>
                    <input
                      className="bg-gray-400 rounded-lg text-black p-2"
                      // name="lastName"
                      defaultValue={userInfo?.lastName}
                      {...register("lastName", { required: true })}
                    />
                  </div>
                </div>

                <div className="flex lg:gap-8  -ml-28 lg:ml-0 gap-2">
                  <div>
                    <label>birthday</label>
                    <input
                      className="bg-gray-400 rounded-lg text-black p-2"
                      defaultValue={userInfo?.birthday}
                      // name="birthday"
                      {...register("birthday", { required: true })}
                    />
                    <label>age</label>
                    <input
                      className="bg-gray-400 rounded-lg text-black p-2"
                      defaultValue={userInfo?.age}
                      // name="age"
                      {...register("age", { required: true })}
                    />
                    <label>phone</label>
                    <input
                      className="bg-gray-400 rounded-lg text-black p-2"
                      defaultValue={userInfo?.phone}
                      // name="phone"
                      {...register("phone", { required: true })}
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      className="bg-gray-400 rounded-lg text-black p-2"
                      defaultValue={user?.email}
                      // name="phone"
                      {...register("email", { required: true })}
                      readOnly
                    />
                    <label>Address</label>
                    <input
                      className="bg-gray-400 rounded-lg text-black p-2"
                      defaultValue={userInfo?.permanentAddress}
                      // name="permanentAddress"
                      {...register("permanentAddress", { required: true })}
                    />

                    <label>city</label>
                    <input
                      className="bg-gray-400 rounded-lg text-black p-2"
                      defaultValue={userInfo?.city}
                      // name="city"
                      {...register("city", { required: true })}
                    />
                  </div>
                </div>
                <div className="flex lg:gap-12 gap-2 mr-20 w-56">
                  <button className="btn btn-explore bg-gradient-to-r from-gray-700 via-green-700 to-gray-700 btn-outline mt-5 w-full">
                    save
                  </button>
                  <button
                    className="btn btn-explore btn-outline mt-5 w-full"
                    onClick={handleEdittoggle}
                  >
                    cancel
                  </button>
                </div>
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
                    className="btn btn-explore btn-outline"
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
