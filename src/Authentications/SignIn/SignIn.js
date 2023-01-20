import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
  const { accountLogIn, providerGoogleLogIn } = useContext(AuthContext);
  const provider = new GoogleAuthProvider();

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogIn = (data) => {
    accountLogIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate('/')
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleLogin=()=>{
    providerGoogleLogIn(provider)
    .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => console.log(error));
  }
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
            <div className="rounded lg:w-[400px] bg-gray-700 px-5">
              <div className="md:hidden flex justify-between mb-3 pt-3">
                <h3 className=" text-xl"> Sign In </h3>
                <Link to="/SignUp" className="text-xl ">
                 Sign Up
                </Link>
              </div>
              <h3 className="hidden md:flex text-2xl mb-3 pt-3">
                Sign In your Account
              </h3>
              <hr />

              <form onSubmit={handleSubmit(handleLogIn)}>
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

                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-contact bg-gray-900 "
                />
                <div className="flex flex-col w-full ">
                  <div className="divider">OR</div>
                
                <button>  <FcGoogle onClick={handleGoogleLogin}  className="w-10 h-10 ml-28 md:ml-40 mb-12"/></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
