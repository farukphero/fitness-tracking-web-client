import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../Hooks/useTitle/useTitle";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-hot-toast";

const SignIn = () => {
  useTitle("SignIn");
  const { accountLogIn, providerGoogleLogIn, logOut, userInfo } =
    useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const [signInError, setSignInError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogIn = (data) => {
    accountLogIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        <Loading></Loading>;
        setSignInError();
        if (user?.emailVerified) {
          toast.success("Sign In success");
          navigate("/Leaderboard");
        } else {
          alert("Please check your email and verify.");
          logOut()
            .then(() => {})
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => setSignInError(error.message));
  };

  const handleGoogleLogin = () => {
    providerGoogleLogIn(provider)
      .then((result) => {
        const user = result.user;
        console.log(user.email, userInfo?.email)
        if (user.email === userInfo.email) {
          navigate("/Leaderboard");
        } else {
          alert("Please Sign Up first");
          logOut()
            .then(() => {})
            .then((error) => console.log(error));
        }
        <Loading></Loading>;
        setSignInError();
      })
      .catch((error) => {
        setSignInError(error);
        navigate("/");
      });
  };
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
                    <div className="rounded w-[355px] md:w-[500px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 px-5">
                      <div className="lg:hidden flex justify-between mb-3 pt-3">
                        <h3 className=" text-xl"> Sign In </h3>
                        <Link to="/SignUp" className="text-xl ">
                          Sign Up
                        </Link>
                      </div>
                      <h3 className="hidden lg:flex text-2xl mb-3 pt-3">
                        Sign In your Account
                      </h3>
                      <hr />

                      <form onSubmit={handleSubmit(handleLogIn)}>
                        <div className="mb-1">
                          <label className="label">
                            <span className="label-text text-white font-lg">
                              Email
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
                        <div className="mb-1">
                          <label className="label">
                            <span className="label-text text-white font-lg">
                              Password
                            </span>
                          </label>
                          <input
                            placeholder="password"
                            {...register("password", { required: true })}
                            type="password"
                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                            name="password"
                          />
                          {errors.password && (
                            <span className="text-red-500">Enter Password</span>
                          )}
                        </div>
                        <p className="text-red-500 my-2">{signInError}</p>

                        <input
                          type="submit"
                          value="Sign In"
                          className="btn btn-log  bg-secondary text-white w-full border-none   rounded-md"
                        />
                      </form>
                      <div className="mt-4 text-end text-green-500 font-semibold">
                        <p>
                          Forgot Password ?{" "}
                          <Link to="/forgotPassword">Click here</Link>
                          <button></button>
                        </p>
                      </div>
                      <div className="flex flex-col w-full ">
                        <div className="divider">OR</div>

                        <button>
                          <FcGoogle
                            onClick={handleGoogleLogin}
                            className="w-10 h-10 ml-32 md:ml-52 lg:ml-60 mb-12"
                          />
                        </button>
                      </div>
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

export default SignIn;
