import React, { useState } from "react";
import working5 from "../../../../assets/working5.json";
import Lottie from "lottie-react";
import useTitle from "../../../../Hooks/useTitle/useTitle";

const Bmi = () => {
  useTitle("Bmi");
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / (Number(height) * 30) / (Number(height) * 30)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Very Severely UnderWeight ");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy and Normal");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese Class");
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  mt-20 mb-44">
        <div className="flex justify-center">
          <Lottie
            className="w-2/3"
            animationData={working5}
            loop={true}
          ></Lottie>
        </div>

        <div
          className="mt-8 ml-24 md:ml-52 lg:ml-2 box rounded-lg w-1/2 px-8 pt-20 pb-4 lg:pb-0   "
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="text-white flex flex-col justify-center gap-4 ">
            <h1 className="text-2xl font-bold text-white">BMI CALCULATOR</h1>

            <input
              type="text"
              className="input   w-full max-w-xs"
              onChange={(e) => setHeight(e.target.value)}
              placeholder="height in fit"
            />

            {/* <input
            type="text"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="height in cm"
          /> */}

            <input
              type="text"
              className="input mb-4  w-full max-w-xs"
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Weight in kg"
            />

            <div>
              {/* The button to open modal */}

              <a
                href="#my-modal-2"
                className="btn btn-log  bg-secondary text-black w-full border-none  "
                onClick={handleBmi}
              >
                Calculator
              </a>

              {/* modal design start here */}

              <div className="modal" id="my-modal-2">
                <div className="modal-box bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600   ">
                  <div
                    className="radial-progress bg-primary text-primary-content text-2xl border-4 border-primary "
                    style={{ "--value": bmi }}
                  >
                    {bmi}
                  </div>
                  <h1 className="text-3xl mt-2 mb-2  font-extralight">
                    {" "}
                    YOUR BMI IS : {bmi}
                  </h1>
                  <h2 className="text-2xl font-extralight"> You have {info}</h2>

                  <div className="modal-action">
                    <a href="#" className="btn">
                      Thank You
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* <button>Calculate</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmi;
