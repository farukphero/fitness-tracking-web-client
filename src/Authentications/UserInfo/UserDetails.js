import React from "react";
import { useForm } from "react-hook-form";

const UserDetails = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageHostkeyk = process.env.REACT_APP_IMG_KEY;

  // rumel
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
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          age: data.age,
          currentadress: data.currentadress,
          permanentadress: data.permanentadress,
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
      });
  };

  return (
    <div >
      <div className="items-center py-10 mx-auto  bg-gray-700 flex-shrink-0 lg:w-1/2 ">
        <form onSubmit={handleSubmit(handleDetails)}>
          <div className="justify-center text-center">
            <p className="text-2xl  text-green-400 mb-4">User Information</p>
            <input
              className="bg-gray-50 w-24 h-24 rounded-full hidden"
              type="file"
              id="file"
              accept="image/*"
              placeholder="photo"
              {...register("img")}
            />
            <label htmlFor="file" className="btn btn-success text-white">
              Upload your photo
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
                  {...register("firstname")}
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
                  {...register("lastname")}
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
                  type="text"
                  placeholder="Birthday"
                  {...register("birthday")}
                  className="input input-bordered bg-gray-600"
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
                  {...register("height")}
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
                  {...register("weight")}
                  placeholder="Weight"
                  className="input input-bordered bg-gray-600"
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
                  className="input input-bordered bg-gray-600"
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
                  {...register("country")}
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
                  {...register("city")}
                  placeholder="City"
                  className="input input-bordered bg-gray-600"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Current Address</span>
                </label>
                <input
                  type="text"
                  {...register("currentadress")}
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
                  {...register("permanentadress")}
                  placeholder="Postal-code,Village,City"
                  className="input input-bordered bg-gray-600 mb-5"
                />
              </div>
            </div>
            <input className="btn btn-contact w-full bg-gray-800 " type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
