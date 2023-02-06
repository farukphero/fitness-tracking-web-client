import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import useTitle from "../../Hooks/useTitle/useTitle";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-hot-toast";


const SignUp = () => {
  useTitle("SignUp")
  const { createUserByEmail,providerGoogleLogIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const [signUpError, setSignUpError] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUserByEmail(data.email, data.password)
      // console.log(data.email, data.password)
      .then((result) => {
        const user = result.user;
        <Loading></Loading>
        toast.success("Welcome to FITLESSIAN")
        navigate("/UserDetails");
      })
      .catch((error) => {
        setSignUpError(error.message)
        console.log(error);
      });
  };

  const handleGoogleSignUp = () => {
    providerGoogleLogIn(provider)
      .then((result) => {
        const user = result.user;
        <Loading></Loading>
        toast.success("Welcome to FITLESSIAN")
        navigate("/UserDetails");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div
        className="hero md:py-10"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI=")`,
        }}
      >
        <div className="hero-content text-center rounded">
          <div>
            <div className="rounded lg:w-[500px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 px-5">
              <div className="md:hidden flex justify-between mb-3 pt-3">
                <Link to="/SignIn" className="text-xl ">
                  Sign In
                </Link>
                <h3 className=" text-xl">Sign Up</h3>
              </div>
              <h3 className="hidden md:flex text-2xl mb-3 pt-3">
                Create your Account
              </h3>
              <hr />

              <form onSubmit={handleSubmit(handleSignUp)}>
                <div className="mb-1">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium mt-3"
                  >
                    Name
                  </label>
                  <input
                    placeholder="Your Name"
                    {...register("name", { required: true })}
                    type="text"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-600 text-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="name"
                  />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    E-mail
                  </label>
                  <input
                    placeholder="**********@gmail.com"
                    {...register("email", { required: true })}
                    type="email"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-600 text-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-1">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 font-medium"
                  >
                    Password
                  </label>
                  <input
                    placeholder="password"
                    {...register("password", { required: true })}
                    type="password"
                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-600 text-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    name="password"
                  />
                </div>
                <p className="text-red-400 mb-3">{signUpError}</p>

                <input
                  type="submit"
                  value="Sign Up"
                  className="btn w-full border-none bg-gradient-to-r from-gray-700 via-green-500 to-gray-700  text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-400 hover:to-gray-800 hover:text-black"
                />
                <div className="flex flex-col w-full  ">
                  <div className="divider  ">OR</div>
                  <button>  <FcGoogle onClick={handleGoogleSignUp}   className="w-10 h-10 ml-32 md:ml-52 mb-12"/></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
