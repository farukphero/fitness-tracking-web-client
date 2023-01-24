import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import plate from "../../../../../../images/plate.png";
import timer from "../../../../../../images/timer.png";
import { AiTwotoneFire } from "react-icons/ai";
import { ImSpoonKnife } from "react-icons/im";

const swiperContent = [{}];

const FoodInfoSlide = () => {
  return (
    <>
      <div className="py-12 px-4 rounded-md border">
        <Swiper
          slidesPerView={`auto`}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center space-x-6 capitalize text-center">
              <div className="avatar">
                <div className="w-12 md:w-32">
                  <img src={plate} alt="plate" />
                </div>
              </div>
              <h2 className="font-bold text-xl">today i can eat 2000 cals</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center space-x-6 capitalize text-center">
              <div className="avatar">
                <div className="w-32">
                  <img src={timer} alt="timer" />
                </div>
              </div>
              <div>
                <div className="gap-y-3 flex flex-col">
                  <div className="flex space-x-3 items-center">
                    <AiTwotoneFire className="text-yellow-500 text-2xl" />
                    <h2 className="capitalize text-xl">
                      burned :{" "}
                      <span className="font-semibold">78 calories</span>
                    </h2>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <ImSpoonKnife className="text-gray-100 text-2xl" />
                    <h2 className="capitalize text-xl">
                      eaten : <span className="font-semibold">0 calories</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex items-center justify-center space-x-6 capitalize text-center">
              <div className="avatar">
                <div className="w-32">
                  <img src={timer} alt="timer" />
                </div>
              </div>
              <div>
                <div className="gap-y-3 flex flex-col">
                  <div className="flex space-x-3 items-center">
                    <AiTwotoneFire className="text-yellow-500 text-2xl" />
                    <h2 className="capitalize text-xl">
                      burned :{" "}
                      <span className="font-semibold">78 calories</span>
                    </h2>
                  </div>
                  <div className="flex space-x-3 items-center">
                    <ImSpoonKnife className="text-gray-100 text-2xl" />
                    <h2 className="capitalize text-xl">
                      eaten : <span className="font-semibold">0 calories</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FoodInfoSlide;
