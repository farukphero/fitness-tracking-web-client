import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUserByEmail } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
 const navigate = useNavigate()

  const handleSignUp = (data) => {
    console.log(data)
    // setSignUpError("");
    createUserByEmail(data.email, data.password)
    // console.log(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate('/')

      })
      .catch((error) => {
        // setSignUpError(error.message)
        console.log(error)
      });
  };

  return (
    <div>
      <div
        className="hero md:py-20"
        style={{
          backgroundImage: `url("https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI=")`,
        }}
      >
        <div className=" "></div>
        <div className="hero-content text-center ">
          <div className=" ">
            <div className="rounded lg:w-[400px] bg-white px-5">
              <div className="md:hidden flex justify-between mb-3 pt-3">
                <Link to="/SignIn" className="text-xl text-black">
                  Sign In
                </Link>
                <h3 className=" text-xl text-black ">Sign Up</h3>
              </div>
              <h3 className="hidden md:flex text-black text-2xl mb-3 pt-3">
                Create your Account
              </h3>
              <hr />

              <form onSubmit={handleSubmit(handleSignUp)}> 
                <div className="mb-1">
                  <label
                    htmlFor="email"
                    className="inline-block mb-1 text-black font-medium mt-3"
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
                    className="inline-block mb-1 text-black font-medium"
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
                    className="inline-block mb-1 text-black font-medium"
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
                  value="Sign Up"
                  className="btn btn-contact text-white "
                />
                <div className="flex flex-col w-full border-opacity-50">
                  <div className="divider text-black">OR</div>
                  <button className="btn btn-outline text-black hover:text-white hover:bg-gradient-to-r from-green-700 to-black hover:border-none w-full mb-12">
                    {/* <FcGoogle  className="mr-2 w-8 h-8"/>  */}
                    Google
                  </button>
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
