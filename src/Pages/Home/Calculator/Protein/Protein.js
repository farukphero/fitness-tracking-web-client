import React, { useState } from "react";

import working17 from "../../../../assets/95592-preparing-food.json";

import Lottie from "lottie-react";
import useTitle from "../../../../Hooks/useTitle/useTitle";

const Protein = () => {
  useTitle("Protein");
  const [proteinTrack, setProteinTrack] = useState();

  const [weight, setWeight] = useState();

  const handleProteinTracking = () => {
    let val = [(Number(weight) * 1000) / 1000];
    setProteinTrack(val);
    console.log(val);
  };
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center  mt-16 mb-44">
          <div>
            <div className="flex justify-center">
              <Lottie
                className="w-2/3"
                animationData={working17}
                loop={true}
              ></Lottie>
            </div>
          </div>

          <div
            className="mt-8 ml-24 md:ml-52 lg:ml-2 box w-1/2 px-8 rounded-lg pt-8 lg:pt-16 pb-8 lg:pb-14 "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="text-white flex flex-col justify-center gap-4 ">
              <h1 className="text-2xl font-bold text-white">
                Intake of Protein
              </h1>

              <div className="input-container">
                <input
                  type="text"
                  className="input mb-4   bg-repeat-round  w-full max-w-xs"
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Weight in kg"
                />
              </div>
              <div>
                <a
                  href="#my-modal-2"
                  className="btn btn-log  bg-secondary text-black w-full border-none  "
                  onClick={handleProteinTracking}
                >
                  Calculator
                </a>

                <div className="modal" id="my-modal-2">
                  <div className="modal-box bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600   ">
                    <h1 className="text-3xl mt-2 mb-2  font-extralight">
                      {" "}
                      You Need To Take Amount Of Protein Daily : {proteinTrack}g
                    </h1>

                    <div className="modal-action">
                      <a href="#" className="btn">
                        Thank You
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protein;

// btn btn-log  bg-secondary text-black w-full border-none   rounded-md
