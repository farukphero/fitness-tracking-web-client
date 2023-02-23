import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";

const GotQuetions = ({ quetion }) => {
  const { ask, _id, user, Name } = quetion;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [add, setAdd] = useState("");

  const handlask = (data) => {
    const askDetails = {
      ask: data.msg,
      user: user?.email,
      Name: data?.name,
      Email: data?.email,
    };

    fetch("http://localhost:5000/questions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(askDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="bg-gradient-to-r from-gray-700 via-teal-900 to-gray-700 p-4 rounded-2xl ">
      <h2 className="card-title mb-2">
        <FaUser></FaUser>
        {Name}
      </h2>
      <div className="">
        <div className="">
          <p>{ask}?</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default GotQuetions;
