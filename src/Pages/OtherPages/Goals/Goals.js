import React from "react";

const Goals = () => {
  const goals = [
    {
      id: 1,
      title: "Improve",
      description:
        "Keeping a food diary helps you understand your habits and increases your likelihood .",
      img: "https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg",
    },
    {
      id: 2,
      title: "Signin Simplified",
      description:
        "Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking",
      img: "https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg",
    },
    {
      id: 3,
      title: "Stay Motivated",
      description:
        "Join the Worlds Largest Fitness Community for advice, tips, and support 24/7",
      img: "https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg",
    },
  ];

  return (
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="2000"
      className="mx-auto items-center justify-center mt-12 py-7 mb-24 "
    >
      <div className="text-center  lg:mb-16">
        <p className="text-4xl text-green-400 font-semibold mb-5">
          The Tools for Your Goals
        </p>
        <p className="text-center">
          Trying to lose weight, tone up,lower your BMI,or invest in your
          overall health?We give you the right features to get there.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
        {goals.map((goal) => (
          <div goal={goal} id={goal.id} className="">
            <div className="">
              <img
                className="bg-slate-400 mx-auto rounded-full items-center justify-center p-4"
                src={goal.img}
                alt=""
              />
            </div>
            <div className="mt-6 mx-auto text-center  mb-2 text-2xl font-semibold">
              <p>{goal.title}</p>
            </div>
            <div className="text-center mx-auto bg-gray-700 rounded-3xl mt-4 shadow-2xl p-4 h-32">
              <p className="text-ellipsis">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
