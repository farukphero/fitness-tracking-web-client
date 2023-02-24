import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle/useTitle';

const ForgotPassword = () => {
    useTitle("ForgotPassword")
    const {forgotPassword } = useContext(AuthContext);
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const handleForgotPass =(data)=>{
        forgotPassword(data.email)
        .then(()=>{
           alert("Check your email")
            
        })
        .catch(error=> setError(error.message))
 
      }
      const handleCancel=()=>{
        navigate("/SignIn")
      }
    return (
        <div>
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
                    “Strength does not come from physical capacity. It comes from
                    an indomitable will.”
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                    FITLESSIAN is a platform that helps you to know how you will
                    be strong and what will be your daily activities.
                  </p>
                </div>
                <div>
                  <div className="hero-content text-center rounded">
                    <div>
                      <div className="rounded w-full md:w-[500px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 px-5 pt-10 pb-20">
                        <h3 className="hidden lg:flex text-2xl mb-3 pt-3">
                        Find Your Account
                        </h3>
                        <hr />
  
                        <form onSubmit={handleSubmit(handleForgotPass)}>
                          <div className="mb-1">
                            <label className="label">
                              <span className="label-text text-white text-lg">
                              Please enter your email address to search for your account.
                              </span>
                            </label>
                            <input
                              // onChange={handleEmailBlur}
                              placeholder="**********@gmail.com"
                              {...register("email", { required: true })}
                              type="email"
                              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                              name="email"
                            />
                            {errors.email && (
                              <span className="text-red-500">
                                Enter Your SignUp Email
                              </span>
                            )}
                          </div>
                          <p className='text-red-500 mb-3'>{error}</p>
                         <div className='flex justify-end gap-4'>
                            <button onClick={handleCancel} className='btn btn-outline btn-log text-white hover:text-white'>Cancel</button>
                         <input
                            type="submit"
                            value="submit"
                            className="btn btn-log bg-secondary text-white  border-none   rounded-md"
                          />
                         </div>
                        </form>
                        
                      </div>
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

export default ForgotPassword;