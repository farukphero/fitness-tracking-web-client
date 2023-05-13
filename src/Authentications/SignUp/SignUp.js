import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import useTitle from "../../Hooks/useTitle/useTitle";
import Loading from "../../Components/Loading/Loading";
import { toast } from "react-hot-toast";

const SignUp = ({ userDetails, anotherInfo }) => {
  // const history = unstable_HistoryRouter()
  useTitle("SignUp");
  const { createUserByEmail, providerGoogleLogIn, emailVerify, user} =
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
      .then((result) => {
        const user = result.user;
 
        const image = data.img[0];
        // console.log(image);
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`;
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
              firstName: userDetails?.firstName,
              lastName: userDetails?.lastName,
              gender: userDetails?.gender,
              age: userDetails?.age,
              birthday: userDetails?.birthday,
              email: data?.email,
              weight: anotherInfo?.weight,
              height: anotherInfo?.height,
              inch: anotherInfo?.inch,
              country: anotherInfo?.country,
              phone: anotherInfo?.phone,
              picture: imgData.data.url,
              sendFrom: [],
              sendTo: [],
              postDate: userDetails?.postDate,
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
                emailVerify()
                  .then(() => {
                    if (user.emailVerified) {
                      toast.success("Welcome to FITLESSIAN");
                      navigate("/Leaderboard");
                      setTimeout(() => {
                        window.location.reload();
                      }, 2000);
                    } else {
                      alert(
                        "Please check email inbox or spam and Verify the email"
                      );
                    }
                  })
                  .catch((error) => console.log(error));
              });
          });
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    providerGoogleLogIn(provider).then((result) => {
      const user = result.user;
      console.log(user)
      // <Loading></Loading>;
      toast.success("Welcome to FITLESSIAN");
      const Details = {
        name: user?.displayName,
        picture: user?.photoURL,
        gender: userDetails.gender,
        age: userDetails.age,
        birthday: userDetails.birthday,
        email: user?.email,
        weight: anotherInfo.weight,
        height: anotherInfo.fit,
        inch: anotherInfo.inch,
        country: anotherInfo.country,
        phone: anotherInfo.phone,
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
        .then(() => {
          navigate("/Leaderboard");
        });
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
              <div className="hero-content text-center rounded">
                <div>
                  <div className="rounded w-[355px] md:w-[500px] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 px-5">
                    <h3 className="mb-4 py-3 text-xl font-semibold text-center sm:mb-6 sm:text-2xl">
                      Sign up for updates
                    </h3>

                    <form onSubmit={handleSubmit(handleSignUp)}>
                      <div className="mb-1 sm:mb-2">
                        <label className="label">
                          <span className="label-text text-white font-lg">
                            Email
                          </span>
                        </label>
                        <input
                          placeholder="Input Valid Email"
                          {...register("email", { required: true })}
                          type="email"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200  text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        />
                        {errors.email && (
                          <span className="text-red-500">
                            Please Enter A Valid Email
                          </span>
                        )}
                      </div>
                      <p className="text-red-400 mb-3">{signUpError}</p>
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
                          <span className="text-red-500">
                            Password Must be Strong
                          </span>
                        )}
                      </div>
                      <label className="label">
                        <span className="label-text text-white font-lg">
                          Select Image
                        </span>
                      </label>
                      <div className="flex gap-2">
                        <div className="mb-1">
                          <input
                            className="file-input file-input-bordered file-input-success w-full max-w-xs mb-3"
                            type="file"
                            name="file"
                            id="file"
                            accept="image/*"
                            placeholder="photo"
                            {...register("img", { required: true })}
                          />
                          <br />
                          {errors.img && (
                            <span className="text-red-500">
                              Choose An Image
                            </span>
                          )}
                        </div>
                      </div>

                      <input
                        type="submit"
                        value="Sign Up"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-secondary   hover:bg-secondary focus:shadow-outline focus:outline-none"
                      />
                      <div className="flex flex-col w-full  ">
                        <div className="divider">OR</div>
                        <button>
                          <FcGoogle
                            onClick={handleGoogleSignUp}
                            className="w-10 h-10 ml-[140px] md:ml-52 mb-12"
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
