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
import DatePicker from "react-datepicker";

const swiperContent = [{}];

const shouldEaten = 2000;

const FoodInfoSlide = ({result, startDate, setStartDate}) => {
  return (
    <>
    <div className="flex justify-between">
      <p></p>
    <div>
    <DatePicker className="font-bold w-2/4 lg:text-2xl capitalize bg-green-800"
        name="date"
        defaultValue='select'
      selected={startDate}
      // value={startDate}
      onChange={date => setStartDate(date)}
    />
    </div>
    </div>
      <div className="py-12 px-4 rounded-md border">
        <Swiper
          slidesPerView={`auto`}
          navigation={true}
          pagination={true}
          modules={[Navigation, Pagination]}
          className="w-full"
        >
          <SwiperSlide>
            <div className="pb-10 text-center">
              <h3 className="text-2xl">Food Plan (how much you should eat for the day)</h3>
            </div>
            <div className="flex items-center justify-center space-x-6 capitalize text-center">
              <div className="avatar">
                <div className="w-12 md:w-32">
                  <img src={plate} alt="plate" />
                </div>
              </div>
              <h2 className="font-bold text-xl">today i can still eat <span className="text-green-500">{shouldEaten - result}</span> cals</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="pb-10 text-center">
              <h3 className="text-2xl">Calories in vs out (are you on track right now)</h3>
            </div>
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
                      eaten : <span className="font-semibold"><span className="text-green-500">{result}</span> calories</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="pb-10 text-center">
              <h3 className="text-2xl">Plan Summary</h3>
            </div>
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
