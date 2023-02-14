import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

const UserDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selected, setSelected] = React.useState(new Date());

  const date = format(selected, "P");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleDetails = (data) => {
    const image = data.img[0];
    // console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=726066e8927dabeb69cd327602b061ef`;
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
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          age: data.age,
          weight: data.weight,
          height:data.height,
          currentAddress: data.currentAddress,
          permanentAddress: data.permanentAddress,
          birthday: data.birthday,
          country: data.country,
          city: data.city,
          phone: data.phone,
          picture: imgData.data.url,
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
            navigate("/Leaderboard");
            console.log(data);
          });

        console.log(Details);
      });
  };

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?b=1&s=170667a&w=0&k=20&c=wm6YUMs03Bup4_9XcQaX61L711qJxAUExEJp_PWO8gI=")`,
      }}
    >
      <div className="items-center mx-auto bg-gray-700 py-10 rounded flex-shrink-0 lg:w-1/2 ">
        <form onSubmit={handleSubmit(handleDetails)}>
          <div className="justify-center text-center">
            <p className="text-2xl font-semibold text-green-500 mb-4">
              Please Provide your information
            </p>
            <input
              className="hidden"
              type="file"
              id="file"
              accept="image/*"
              placeholder="photo"
              {...register("img", { required: true })}
            />
            <label htmlFor="file" className="btn text-white">
              Upload a photo
            </label>
          </div>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            className="hidden"
          />
          <div className="card-body">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">FirstName</span>
                </label>
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                  placeholder="FirstName"
                  className="input input-bordered bg-gray-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">LastName</span>
                </label>
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                  placeholder="LastName"
                  className="input input-bordered bg-gray-600"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Birthday</span>
                </label>
                <input
                  {...register("birthday", { required: true })}
                  type="text"
                  placeholder="User This formate: 00-00-0000"
                  className="p-3 rounded bg-gray-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Age</span>
                </label>
                <input
                  type="text"
                  {...register("age", { required: true })}
                  placeholder="Age"
                  className="input input-bordered bg-gray-600"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Height</span>
                </label>
                <input
                  type="text"
                  {...register("height", { required: true })}
                  placeholder="Height"
                  className="input input-bordered bg-gray-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Weight</span>
                </label>
                <input
                  type="text"
                  {...register("weight", { required: true })}
                  placeholder="Weight"
                  className="input input-bordered bg-gray-600"
                />
              </div>
              <div>
                <select
                  {...register("gender", { required: true })}
                  className="select select-bordered w-full max-w-xs"
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

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered bg-gray-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Phone</span>
                </label>
                <input
                  type="text"
                  {...register("phone", { required: true })}
                  placeholder="Phone"
                  className="input input-bordered bg-gray-600"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Country</span>
                </label>
                <input
                  type="text"
                  {...register("country", { required: true })}
                  placeholder="Country"
                  className="input input-bordered bg-gray-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">City</span>
                </label>
                <input
                  type="text"
                  {...register("city", { required: true })}
                  placeholder="City"
                  className="input input-bordered bg-gray-600"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10 mb-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Current Address</span>
                </label>
                <input
                  type="text"
                  {...register("currentAddress", { required: true })}
                  placeholder="Postal-code,Village,City"
                  className="input input-bordered bg-gray-600"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Permanent Address
                  </span>
                </label>
                <input
                  type="text"
                  {...register("permanentAddress", { required: true })}
                  placeholder="Postal-code,Village,City"
                  className="input input-bordered bg-gray-600"
                />
              </div>
            </div>
            <input className="btn btn-contact mt-5 w-full" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
