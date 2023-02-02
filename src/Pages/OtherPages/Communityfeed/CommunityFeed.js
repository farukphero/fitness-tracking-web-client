import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle/useTitle";

const CommunityFeed = () => {
  const { user, userInfo } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const imageHostkeyk = "e49a11b11d3bcadfe6ff2e14a831598a";
  useTitle("Community");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const PostButton = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostkeyk}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        console.log(imgData);
        if (imgData.success) {
          console.log(imgData.data.url);

          const postData = {
            firstName: userInfo?.firstName,
            lastName: userInfo?.lastName,
            post: data.post,
            image: imgData.data.url,
            email: user?.email,
          };
          fetch("http://localhost:5000/post", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                navigate("/Community");
              }
            });
        }
      });
  };

  return (
    <div className="p-10 w-10/12 mx-auto">
      <div className="items-center mb-4 justify-start flex gap-4">
        <div className="avatar">
          <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={userInfo?.picture} alt="" />
          </div>
        </div>
        <div>
          <h1>
            {userInfo?.firstName} {userInfo?.lastName}
          </h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(PostButton)}>
        <div>
          <textarea
            className="w-full text-black outline rounded-2xl"
            type="text"
            {...register("post", {})}
            placeholder="Write you article...."
            id=""
            cols="10"
            rows="5"
          ></textarea>
        </div>

        <div className="form-control w-full max-w-xs">
          <input
            type="file"
            {...register("img", {})}
            placeholder="img add"
            className="input input-bordered mb-2 w-full max-w-xs"
          />
        </div>
        <div>
          <input className="btn btn-accent" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default CommunityFeed;
