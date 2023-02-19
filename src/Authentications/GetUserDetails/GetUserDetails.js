import { format } from "date-fns";
import React, { useContext } from "react";
import { DayPicker } from "react-day-picker";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const GetUserDetails = () => {
  const { user ,createUserByEmail } = useContext(AuthContext);
  const navigate = useNavigate();

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
      email:data.email,
      age: data.age,
      birthday: data.birthday,
      sendFrom: [],
      sendTo: [],
      gender: data.gender,
      postDate: date,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Details),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/SignUp/SignUp");
        handleSignUp(Details.email)
        console.log(data);
      });
  };
  const handleSignUp = (data) => {
    console.log(data);
    // setSignUpError("");
    createUserByEmail(data.email )
      // console.log(data.email, data.password)
      .then((result) => {
        const user = result.user;
        // <Loading></Loading>;
        toast.success("Welcome to FITLESSIAN");
        // const profile = {
        //   displayName: data.firstName + data.lastName,
        // };
        // updateUser(profile)
        //   .then(() => {
        //     saveUser(data.name);
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });
      })
      .catch((error) => {
        // setSignUpError(error.message);
        console.log(error);
      });
  };

  return (
    <div className="relative">
      <img
        src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI="
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-80">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                The quick, brown fox <br className="hidden md:block" />
                jumps over a{" "}
                <span className="text-teal-accent-400">lazy dog</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
              >
                Learn more
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
              className="hidden"
            />
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
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
                    </div>
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="birthday"
                      className="inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input
                      placeholder="Input Valid Email"
                      {...register("email", { required: true })}
                      type="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      
                    />
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
                      </select>
                    </div>
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-secondary   hover:bg-secondary focus:shadow-outline focus:outline-none"
                    >
                      CONNECT NOW
                    </button>
                  </div>
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
  );
};

export default GetUserDetails;
