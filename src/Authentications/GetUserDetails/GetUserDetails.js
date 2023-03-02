import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SignUp from "../SignUp/SignUp";

const GetUserDetails = () => {
  const [userDetails, setUserDetails] = useState({});
  const [anotherInfo, setAnotherInfo] = useState({});
  const [selected, setSelected] = React.useState(new Date());

  const date = format(selected, "P");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleDetails = (data) => {
    const Details = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      age: data.age,
      birthday: data.birthday,
      sendFrom: [],
      sendTo: [],
      gender: data.gender,
      postDate: date,
    };
    setUserDetails(Details);
  };

  return (
    <section>
      {!userDetails?.age && (
        <div className="relative">
          <img
            src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI="
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-gray-900 bg-opacity-80">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 hidden lg:block">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
                    “Strength does not come from physical capacity. It comes
                    from an indomitable will.”
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                    FITLESSIAN is a platform that helps you to know how you will
                    be strong and what will be your daily activities.
                  </p>
                </div>
                <DayPicker
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  className="hidden"
                />
                <div>
                  <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded shadow-2xl p-7 sm:p-10 md:w-[500px]">
                    <div className="lg:hidden flex justify-between mb-3 pt-3">
                      <Link to="/SignIn" className="text-xl ">
                        Sign In
                      </Link>
                      <h3 className=" text-xl"> Sign Up </h3>
                    </div>
                    <hr />
                    <h3 className="hidden lg:flex mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                      Sign up for updates
                    </h3>
                    <form onSubmit={handleSubmit(handleDetails)}>
                      <div className="flex gap-5">
                        <div className="mb-1 sm:mb-2">
                          <label
                            htmlFor="firstName"
                            className="inline-block mb-1 font-medium"
                          >
                            First name
                          </label>
                          <input
                            placeholder="First Name"
                            {...register("firstName", { required: true })}
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          />
                          {errors.firstName && <span className="text-red-500">Enter Your First Name</span>}
                        </div>
                        <div className="mb-1 sm:mb-2">
                          <label
                            htmlFor="lastName"
                            className="inline-block mb-1 font-medium"
                          >
                            Last name
                          </label>
                          <input
                            placeholder="Last Name"
                            {...register("lastName", { required: true })}
                            type="text"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          />
                          {errors.lastName && <span className="text-red-500">Enter Your Last Name</span>}
                        </div>
                      </div>

                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="birthday"
                          className="inline-block mb-1 font-medium"
                        >
                          Date of birth
                        </label>
                        <input
                          placeholder="Follow this method: 00-00-0000"
                          {...register("birthday", { required: true })}
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        />
                        {errors.birthday && <span className="text-red-500">Enter Date of Birth</span>}
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="age"
                          className="inline-block mb-1 font-medium"
                        >
                          Age
                        </label>
                        <input
                          placeholder="Age"
                          {...register("age", { required: true })}
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        />
                        {errors.age && <span className="text-red-500">Enter Your Age.</span>}
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="gender"
                          className="inline-block mb-1 font-medium"
                        >
                          Gender
                        </label>
                        <div>
                          <select
                            {...register("gender", { required: true })}
                            className="select select-bordered flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline text-black"
                          >
                            <option disabled selected>
                              Gender
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          {errors.gender && <span className="text-red-500">Select Your Gender</span>}
                          </select>
                        </div>
                      </div>

                      <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-secondary   hover:bg-secondary focus:shadow-outline focus:outline-none">
                       NEXT
                      </button>
                      <p className="text-xs text-gray-200 sm:text-sm">
                        We respect your privacy.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {userDetails?.age && !anotherInfo.phone && (
        <div>
          <PersonalInfo setAnotherInfo={setAnotherInfo}></PersonalInfo>
        </div>
      )}
      {anotherInfo.phone && (
        <div>
          <SignUp userDetails={userDetails} anotherInfo={anotherInfo}></SignUp>
        </div>
      )}
    </section>
  );
};

export default GetUserDetails;
