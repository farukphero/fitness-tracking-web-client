import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ImFolderPlus } from "react-icons/im";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle/useTitle";
import "./UserInfo.css";

const UserInfo = () => {
  useTitle("Profile/UserInfo");
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

  const handleEdit = (data) => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`;
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

        fetch(
          `https://fitness-tracking-web-server.vercel.app/users/edit/${user?.email}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserInfo),
          }
        )
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
    fetch(`https://fitness-tracking-web-server.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data))
      .finally((data) => console.log(data));
  }, [user]);

  // health checkup start here:

  // bmi calculation is:
  const getBmi = (weight, height) => {
    const value = (
      [Number(weight) / (Number(height) * 30) / (Number(height) * 30)] * 10000
    ).toFixed(1);
    return value;
  };
  const bmi = getBmi(userInfo?.weight, userInfo.height);
  console.log(bmi);

  // bmr calculation is:

  // intake of water daily:
  const getWater = (weight) => {
    let intake = Number(weight) / 30;
    const result = intake.toFixed(2)
    return result;
  };

  const water = getWater(userInfo?.weight);

  // blood measurement :
  const getBlood = (weight) => {
    let measurement = [(Number(weight) * 8) / 100];
    return measurement;
  };

  const blood = getBlood(userInfo?.weight);

  // protein :
  const getProtein = (weight) => {
    let check = [(Number(weight) * 1000) / 1000];
    return check;
  };

  const protein = getProtein(userInfo?.weight);

  return (
    <div className="w-8/12 mx-auto my-20 -mt-5 md:-mt-80 lg:mt-20 scale-75 lg:scale-100">
      <div className="lg:w-[900px] ">
        <div className="-ml-24 md:ml-0 mb-5">
          <h1 className="text-2xl my-8">Health Activities:</h1>
          <div className="grid grid-cols-4 lg:grid-cols-4 gap-20 md:gap-0">
            <div className="indicator ">
              <span className="indicator-item badge bg-white text-2xl px-2 py-3 md:p-4 badge-primary">
                {bmi} 
              </span>
              <div className="grid w-20 h-20 md:w-24 md:h-24 bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600 place-items-center">
                <Link to="/bmi"> BMI</Link>
              </div>
            </div>

            <div className="indicator ">
              <span className="indicator-item badge bg-white text-2xl px-2 py-3 md:p-4 badge-primary">
                {blood}L
              </span>
              <div className="grid w-20 h-20 md:w-24 md:h-24 pl-4 bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600   place-items-center">
                Include Blood
              </div>
            </div>
            <div className="indicator ">
              <span className="indicator-item badge bg-white text-2xl px-2 py-3 md:p-4 badge-primary">
                {protein}G
              </span>
              <div className="grid w-20 h-20 md:w-24 md:h-24 pl-4 bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600   place-items-center">
                Intake Protein
              </div>
            </div>
            {/* <div className="indicator mt-4">
              <span className="indicator-item badge bg-white text-2xl px-4 py-4 badge-primary">
                {calculateBMR({
                  age: userInfo?.age,
                  gender: userInfo?.gender,
                  heightFeet: userInfo?.height,
                  heightInches: userInfo?.inch,
                  weight: userInfo?.weight,
                  weightType: 1,
                })}
              </span>
              <div className="grid w-24 h-24 bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600   place-items-center">
                <Link to="/bmr"> BMR</Link>
              </div>
            </div> */}
            <div className="indicator ">
              <span className="indicator-item badge bg-white text-2xl px-2 py-3 md:p-4 badge-primary">
                {water}
                {/* 1.667L */}
              </span>
              <div className="grid w-20 h-20 md:w-24 md:h-24 pl-4 bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600 place-items-center">
                Intake Water
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="avatar mr-10">
            <div className="w-28 lg:w-32 mb-10 ml-16 lg:ml-24 lg:mt-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={userInfo?.picture} alt="" />
            </div>
          </div>
          <div className="text-white text-user-info relative">
            {isEditing ? (
              <form
                className="flex flex-col lg:w-96 gap-3"
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
                    <ImFolderPlus className="h-6 w-7 p-1"/>
                  </label>
                </div>
                <div className="flex md:gap-8 -ml-28 md:ml-0 gap-2 mt-3">
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

                <div className="flex md:gap-8  -ml-28 md:ml-0 gap-2">
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
                <div className="flex md:gap-12 gap-2 mr-20 w-46 lg:w-60">
                  <button className="btn btn-log bg-secondary text-black mt-5 w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
