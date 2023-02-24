import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import faq from "../../../images/support.json";

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
        console.log(data);
      });
  };

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
      className="w-full mb-10 shadow-xl image-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mt-20"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
    >
      <p className="text-4xl font-bold text-all-green text-center mb-4">
        Whats Your Questions
      </p>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
        
            <Lottie
              className="w-full scale-110"
              animationData={faq}
              loop={true}
            ></Lottie>
         
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
        <Link to="faq"
          
          className="btn-explore-about  border-2 px-8 py-3 border-green-600 rounded-md"
        >
        See More
        </Link>
      </div>

      {/* Put this part before </body> tag */}
      
      
    </div>
  );
};

export default Faqs;
