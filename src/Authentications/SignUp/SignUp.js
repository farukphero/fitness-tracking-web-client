import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../Hooks/useTitle/useTitle";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-hot-toast";

const SignUp = ({ userDetails, anotherInfo }) => {
  useTitle("SignUp");
  const { createUserByEmail, providerGoogleLogIn, updateUser } =
    useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const [signUpError, setSignUpError] = useState("");
  const [loadImage, setLoadImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handleSignUp = (data) => {
    setSignUpError("");
    createUserByEmail(data.email, data.password)
      // console.log(data.email, data.password)
      .then((result) => {
        const user = result.user;
        <Loading></Loading>;
        toast.success("Welcome to FITLESSIAN");
        const image = data.img[0];
        // console.log(image);
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=c49cb06155adb366044d147043658858`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            if (imgData.success) {
              setLoadImage(imgData.data.url);
            }

            const Details = {
              firstName: userDetails.firstName,
              lastName: userDetails.lastName,
              gender: userDetails.gender,
              age: userDetails.age,
              birthday: userDetails.birthday,
              email: data.email,
              weight: anotherInfo.weight,
              height: anotherInfo.fit,
              inch: anotherInfo.inch,
              country: anotherInfo.country,
              phone: anotherInfo.phone,
              picture: imgData.data.url,
              sendFrom: [],
              sendTo: [],
              postDate: userDetails.postDate,
            };
            fetch("https://fitness-tracking-web-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(Details),
            })
              .then((res) => res.json())
              .then((data) => {
                navigate("/Leaderboard");
                console.log(data);
              });

            console.log(Details);
          });
      })
      .catch((error) => {
        setSignUpError(error.message);
        console.log(error);
      });
  };

  const handleGoogleSignUp = (data) => {
    providerGoogleLogIn(provider)
      .then((result) => {
        const user = result.user;
        <Loading></Loading>;
        toast.success("Welcome to FITLESSIAN");
        const image = data.img[0];
        // console.log(image);
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=c49cb06155adb366044d147043658858`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            if (imgData.success) {
              console.log(imgData.data.url);
            }

            const Details = {
              name: user?.displayName,
              gender: userDetails.gender,
              age: userDetails.age,
              birthday: userDetails.birthday,
              email: user?.email,
              weight: anotherInfo.weight,
              height: anotherInfo.fit,
              inch: anotherInfo.inch,
              country: anotherInfo.country,
              phone: anotherInfo.phone,
              picture: imgData.data.url,
              sendFrom: [],
              sendTo: [],
              postDate: userDetails.postDate,
            };
            fetch("https://fitness-tracking-web-server.vercel.app/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(Details),
            })
              .then((res) => res.json())
              .then((data) => {
                navigate("/Leaderboard");
                console.log(data);
              });

            console.log(Details);
          });
      })
      .catch((error) => console.log(error));
  };

  const saveUser = (name) => {
    const user = {
      name,
    };
    fetch("https://fitness-tracking-web-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("save user", data);
        // setCreatedUserEmail(email);
        navigate("/UserDetails");
      });
  };

  const fileHandle = (data) => {
    const image = data.img[0];
    // console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=c49cb06155adb366044d147043658858`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          setLoadImage(imgData.data.url);
        }
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
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-semibold tracking-tight text-white sm:text-4xl sm:leading-none">
                  “Strength does not come from physical capacity. It comes from
                  an indomitable will.”
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  FITLESSIAN is a platform that helps you to know how you will
                  be strong and what will be your daily activities.
                </p>
              </div>
              <div className="hero-content text-center rounded">
                <div>
                  <div className="rounded lg:w-[500px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 px-5">
                    <div className="md:hidden flex justify-between mb-3 pt-3">
                      <Link to="/SignIn" className="text-xl ">
                        Sign In
                      </Link>
                      <h3 className=" text-xl">Sign Up</h3>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                      Sign up for updates
                    </h3>
                    <hr />

                    <form onSubmit={handleSubmit(handleSignUp)}>
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
                      <p className="text-red-400 mb-3">{signUpError}</p>
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
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          name="password"
                        />
                      </div>
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Select Image
                      </label>
                      <div className="flex gap-2">
                        {/* <div className="h-12 w-12 rounded-full border-2 mb-3 ml-2">
                          {loadImage ? <img src={loadImage} alt="" /> : <></>}
                        </div> */}
                        <div className="mb-1">
                          {/* <label
                            htmlFor="file"
                            className="border-green-600 btn  rounded-md w-full lg:w-96 text-lg bg-yellow-200 hover:bg-yellow-300 text-black"
                          >
                            Upload a photo
                          </label> */}
                          <input
                            onChange={fileHandle}
                            className="file-input file-input-bordered file-input-success w-full max-w-xs"
                            type="file"
                            id="file"
                            accept="image/*"
                            placeholder="photo"
                            {...register("img", { required: true })}
                          />
                        </div>
                      </div>

                      <input
                        type="submit"
                        value="Sign Up"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-secondary   hover:bg-secondary focus:shadow-outline focus:outline-none"
                      />
                      <div className="flex flex-col w-full  ">
                        <div className="divider  ">OR</div>
                        <button>
                          {" "}
                          <FcGoogle
                            onClick={handleGoogleSignUp}
                            className="w-10 h-10 ml-32 md:ml-52 mb-12"
                          />
                        </button>
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
  );
};

export default SignUp;
