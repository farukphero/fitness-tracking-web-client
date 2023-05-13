import React from "react";
import { useQuery } from "react-query";
import useTitle from "../../../../Hooks/useTitle/useTitle";

const AddTutorials = () => {
  useTitle("AddTutorials");
  const addTutorial = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const link = event.target.link.value;
    const category = event.target.category.value;
    const tutorialInfo = {
      title,
      link,
      category,
    };
    fetch("https://fitness-tracking-web-server.vercel.app/tutorial", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tutorialInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    event.target.reset();
  };

  const addCategory = (event) => {
    event.preventDefault();
    const category = event.target.category.value;
    const image = event.target.image.files[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.display_url);
        const image = data.data.display_url;
        const categoryInfo = {
          category,
          image,
        };

        fetch("https://fitness-tracking-web-server.vercel.app/category", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(categoryInfo),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((error) => console.log(error));
    event.target.reset();
  };

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(`https://fitness-tracking-web-server.vercel.app/categories`).then(
        (res) => res.json()
      ),
  });
  return (
    <div className=" my-12 w-4/5 lg:w-2/5 mx-auto ">
      <div className="">
        <div className=" text-center">
          <h1 className="text-center text-2xl font-bold my-3">Add Tutorials</h1>
          <form onSubmit={addTutorial}>
            <label className="my-3">
              <input
                name="title"
                type="text"
                className="w-full bg-gray-800 text-center py-1 rounded"
                placeholder="Add Title"
                required
              />
            </label>
            <div>
              <select
                name="category"
                className="w-full bg-gray-800 text-center py-1 rounded  my-3"
                required
              >
                <option disabled selected>
                  Select Category
                </option>
                {categories.map((category) => (
                  <>
                    <option>{category.category}</option>
                  </>
                ))}
              </select>
            </div>

            <label className="my-3">
              <input
                name="link"
                type="text"
                className="w-full bg-gray-800 text-center py-1 rounded"
                placeholder="Upload Video"
                required
              />
            </label>
            <div className="my-3">
              <button
                type="submit"
                className="btn btn-log  bg-secondary text-black w-full border-none   rounded-md"
              >
                Done
              </button>
            </div>
          </form>
        </div>
        <div className="my-10">
          <h1 className="text-center text-2xl font-bold my-3">Add Category</h1>
          <form onSubmit={addCategory}>
            <label>
              <input
                name="category"
                type="text"
                className="bg-gray-800 text-center py-1 rounded  w-full"
                placeholder="Category Name"
                required
              />
            </label>
            <div className=" flex  items-center">
              <div className=" mx-auto ">
                <input
                  className="hidden "
                  type="file"
                  id="file"
                  accept="image/*"
                  placeholder="photo"
                />
                <label
                  htmlFor="file"
                  className="btn border-none bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white text-sm mr-2 my-4 lg:w-96"
                >
                  Thumbnail Image
                </label>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-log  bg-secondary text-black w-full border-none   rounded-md"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTutorials;
