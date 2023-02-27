 
import React, { useContext } from "react";
import { useState, useEffect } from "react";
 
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import faq from "../../../assets/faq.svg";
import { FaUser } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const Faqs = () => {
  const { user } = useContext(AuthContext);
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

    fetch("https://fitness-tracking-web-server.vercel.app/questions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(askDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success('Questions Added')

        }

        console.log(data);
      });
    data.form.reset()
  };

  const [answer, setAnswer] = useState([])

  useEffect(() => {
    fetch('https://fitness-tracking-web-server.vercel.app/answer')
      .then(res => res.json())
      .then(data => setAnswer(data))
  }, [])

  console.log(answer)

  const Faq = [
    {
      id: 1,
      quetions: "What is fitness tracking?",
      answer:
        "Fitness tracking refers to the use of technology, such as wearable devices or smartphone apps, to monitor various aspects of an individual's physical activity and health, such as steps taken, calories burned, heart rate, sleep, etc.",
    },
    {
      id: 2,
      quetions: "How do I access a Fitlessian?",
      answer:
        "You can access a fitness tracking web application by logging into the application's website on your computer or mobile device with an internet connection.",
    },
    {
      id: 3,
      quetions: "Who uses Fitlessian?",
      answer:
        "fitlessian are used by individuals who want to monitor their physical activity and health, including athletes, fitness enthusiasts, and those who are simply looking to become more active and improve their overall health",
    },
    {
      id: 4,
      quetions: "Why you use Fitlessian?",
      answer:
        "Fitlessian can help you keep track of your progress, set and achieve fitness goals, motivate you to be more active, and provide insights into your overall health.",
    },
  ];

  return (
    <div
      className="w-full mb-10 shadow-xl image-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900"
    >
      <p className="text-4xl font-bold text-all-green text-center mb-4">
        Whats Your Questions
      </p>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img className="w-1/2" src={faq} alt="" />
          <div>
            <div className="h-1/2 mt-10 w-full grid grid-cols-1 mx-auto gap-4">
              {Faq.map((faq) => (
                <div>
                  <body className="bg-gray-800 rounded-xl shadow-red-500 drop-shadow-2xl ">
                    <div className="flex justify-center">
                      <div className="relative p-3  text-white ">
                        <input
                          className="absolute peer"
                          type="checkbox"
                        ></input>
                        <div className="mb-3 mt-3">
                          <label
                            className="mt-3 text-2xl px-8 font-semibold text-white ml-2 tracking-[1px] mx-[20px] h-[50px] flex items-center"
                            for="input"
                          >
                            {faq.quetions}
                          </label>
                        </div>

                        <div className="max-h-0 overflow-hidden peer-checked:max-h-full">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </body>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The button to open modal */}
      <div className="flex justify-center mt-8 pb-16">
        <label
          htmlFor="my-modal-6"
          className="btn-explore-about  border-2 px-8 py-3 border-green-600 rounded-md"
        >
          Ask Your Questions
        </label>
      </div>
      <div className="mt-2 w-3/4 mx-auto mb-2 m-3">
        {/* <p className="text-3xl text-center font-bold mt-3 mb-2">User Answer</p> */}
        <div className="grid grid-cols-1  lg:grid-cols-3">
          {
            answer.map(ans =>
              <div
                ans={ans}
                key={ans._id}
              >
                <div className='bg-gradient-to-r from-gray-700 via-green-700 to-gray-700 m-3 ml-0 p-4 rounded-2xl'>
                  <h2 className="card-title mb-2"><FaUser></FaUser>{ans.Name}</h2>


                  <div className="">

                    <p>{ans.Adminans}?</p>
                    <div className="card-actions justify-end">
                    </div>


                  </div>

                </div>


              </div>
            )
          }
        </div>
      </div>
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
            <p className="text-4xl mb-5 text-all-green font-bold">
              Ask You Quetions
            </p>
            <form onSubmit={handleSubmit(handlask)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-3">
                <textarea
                  {...register("msg", { required: true })}
                  className="input h-36 text-white input-bordered"
                  id=""
                  cols="30"
                  placeholder="Ask your questions"
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
  );
};

export default Faqs;
