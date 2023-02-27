import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const GotQuetions = ({ quetion }) => {
  const { ask, _id, user, Email, Name } = quetion;
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // const [add, setAdd] = useState("");

  const handlask = (data) => {
    const Ans = {
      Adminans: data.msg,

      Name: Name,
      Email: Email,
    };
    console.log(data);
    console.log(Ans);
    fetch("https://fitness-tracking-web-server.vercel.app/ans", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Ans),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Answered");
        }
        // console.log(data);
      });
  };

  return (
    <div className=" ">
      <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 m-3 ml-0 p-4 rounded-2xl">
        <h2 className="card-title mb-2">
          <FaUser></FaUser>
          {Name}
        </h2>

        <div>
          <p>{ask}?</p>
        </div>
        <div className="justify-center mt-8">
          <label
            htmlFor="my-modal-6"
            className="btn btn-outline btn-sm hover:bg-secondary hover:text-white text-white border-2 border-green-600 rounded-md"
          >
            Reply
          </label>
        </div>
      </div>

      <div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-gray-800">
            <div className="card-body">
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="font-bold text-white">
                  X
                </label>
              </div>
              <p className="text-4xl mb-5 text-all-green font-bold">Reply</p>
              <form onSubmit={handleSubmit(handlask)}>
                <div className="form-control mb-3">
                  <textarea
                    {...register("msg", { required: true })}
                    className="input h-36 text-white input-bordered"
                    id=""
                    cols="30"
                    placeholder="Ans User Questions"
                    rows="10"
                  ></textarea>
                </div>
                <div className="form-control mb-3">
                  <button className="btn-explore-about border-2 px-8 py-3 border-green-600 rounded-md  ">
                    Submit
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

export default GotQuetions;
