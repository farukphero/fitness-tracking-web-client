import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SignIn = () => {
  const { accountLogIn } = useContext(AuthContext);
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
  return (
    <div className="grid md:grid-cols-2 gap-8 md:w-10/12 mx-auto md:my-20">
      <img
        className="hidden md:flex h-[450px] rounded"
        src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI="
        alt=""
      />
      <div className="rounded shadow-2xl px-5">
        <div className="md:hidden flex justify-between mb-3">
          <h3 className="text-xl text-white">Sign In</h3>
          <Link to="/SignUp" className=" text-xl text-white ">
            Sign Up
          </Link>
        </div>
        <h3 className="hidden md:flex text-white  text-2xl mb-3">
          Sign In to your Account
        </h3>
        <hr />

        <form onSubmit={handleSubmit(handleLogIn)}>
          <div className="mb-1">
            <label
              htmlFor="email"
              className="inline-block mb-1 text-white font-medium mt-3"
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
              className="inline-block mb-1 text-white font-medium"
            >
              Password
            </label>
            <input
              placeholder="password"
              {...register("password", { required: true })}
              type="password"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-600 text-white rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
            />
          </div>

          <input
            type="submit"
            value="Sign In"
            className="btn btn-contact text-white "
          />
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider text-white">OR</div>
            <button className="btn btn-outline text-white hover:text-black hover:bg-gradient-to-r from-green-700 to-white hover:border-none w-full">
              {/* <FcGoogle  className="mr-2 w-8 h-8"/>  */}
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
