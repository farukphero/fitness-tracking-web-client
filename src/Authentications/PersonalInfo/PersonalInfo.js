import React from "react";
import { useForm } from "react-hook-form";
 
const PersonalInfo = ({setAnotherInfo}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleDetails = (data) => {
    const Details = {
      weight: data.weight,
      height: data.fit,
      inch: data.inch,
      country: data.country,
      phone: data.phone,
    
    };
    setAnotherInfo(Details)
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
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
                  “Strength does not come from physical capacity. It comes from an indomitable will.” 
                    
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  FITLESSIAN is a platform that helps you to know how you will be strong and what will be your daily activities.
                  </p>
            </div>
            <div >
              <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 rounded shadow-2xl p-7 sm:p-10 lg:w-[500px]">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign up for updates
                </h3>
                <form onSubmit={handleSubmit(handleDetails)}>
                  <div>
                    <label className="inline-block mb-1 font-lg">Height</label>
                    <div className="flex gap-5">
                      <div className="mb-1 sm:mb-2">
                        <input
                          placeholder="Fit"
                          {...register("fit", { required: true })}
                          type="text"
                          className="flex-grow w-full h-12 px-4   transition duration-200 text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        
                        <input
                          placeholder="inch"
                          {...register("inch", { required: true })}
                          type="text"
                          className="flex-grow w-full h-12 px-4  transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        />
                      </div>
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white font-lg">Weight</span>
                      </label>
                      <input
                        type="text"
                        {...register("weight", { required: true })}
                        placeholder="Weight"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="birthday"
                      className="inline-block mb-1 font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      placeholder="Phone Number"
                      {...register("phone", { required: true })}
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="age"
                      className="inline-block mb-1 font-medium"
                    >
                      Nationality
                    </label>
                    <input
                      placeholder="Country"
                      {...register("country", { required: true })}
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
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

export default PersonalInfo;
