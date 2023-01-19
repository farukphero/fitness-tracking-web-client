import React from "react";
import { useForm } from "react-hook-form";

const UserDetails = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostkeyk = process.env.REACT_APP_IMG_KEY;

  const handleDetails = (data) => {
    const image = data.img[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostkeyk}`;
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
          currentAddress: data.currentAddress,
          permanentAddress: data.permanentAddress,
          birthday: data.birthday,
          country: data.country,
          city: data.city,
          phone: data.phone,
          picture: imgData.data.url,
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
            console.log(data);
          });

        console.log(Details);
      });
  };

  return (
    <div className="py-10  bg-gray-600">
      <div className="items-center mx-auto text-black flex-shrink-0 w-1/2 ">
        <form onSubmit={handleSubmit(handleDetails)}>
          <div className="justify-center text-center">
            <p className="text-2xl font-semibold text-green-500 mb-4">
              {" "}
              Provide your information{" "}
            </p>
            <input
              className="hidden"
              type="file"
              id="file"
              accept="image/*"
              placeholder="photo"
              {...register("img")}
            />
            <label htmlFor="file" className="btn text-white">
              Upload a photo
            </label>
          </div>

          <div className="card-body">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">FirstName</span>
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder="FirstName"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">LastName</span>
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  placeholder="LastName"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Birthday</span>
                </label>
                <input
                  {...register("birthday")}
                  type="date"
                  name=""
                  className="p-3 rounded"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Age</span>
                </label>
                <input
                  type="text"
                  {...register("age")}
                  placeholder="Age"
                  className="input input-bordered"
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
                  {...register("height")}
                  placeholder="Height"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Weight</span>
                </label>
                <input
                  type="text"
                  {...register("weight")}
                  placeholder="Weight"
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email")}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Phone</span>
                </label>
                <input
                  type="number"
                  {...register("phone")}
                  placeholder="Phone"
                  className="input input-bordered"
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
                  {...register("country")}
                  placeholder="Country"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">City</span>
                </label>
                <input
                  type="text"
                  {...register("city")}
                  placeholder="City"
                  className="input input-bordered"
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
                  {...register("currentAddress")}
                  placeholder="Postal-code,Village,City"
                  className="input input-bordered"
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
                  {...register("permanentAddress")}
                  placeholder="Postal-code,Village,City"
                  className="input input-bordered"
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
