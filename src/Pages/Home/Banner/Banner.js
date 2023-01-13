import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from "../../../assets/bannerSlide1.jpg";
import slide2 from "../../../assets/bannerSlide2.jpg";
import slide3 from "../../../assets/bannerSlide3.jpg";
import slide4 from "../../../assets/bannerSlide4.jpg";
import slide5 from "../../../assets/bannerSlide5.jpg";

// import required modules
import { Pagination } from "swiper";
import { MdGrade } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-gray-700 pt-8">
      <div className="text-white flex justify-center  font-bold">
        <div>
        <h1 className="text-bold text-4xl">
          
          Stay Healthy Even If You 
        </h1>
        <h1 className="text-bold text-4xl">Stay <span className="text-amber-300">At Home</span></h1>
        </div>
      </div>
      {/* <div className="pt-16 pb-16  ">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide className="text-green-600">
            <img className="mb-10" src={slide1} alt=""></img>
          </SwiperSlide>
          <SwiperSlide>
           
            <img src={slide2} alt=""></img>
          </SwiperSlide>
          <SwiperSlide>
           
            <img src={slide3} alt=""></img>
          </SwiperSlide>
          <SwiperSlide>
           
            <img src={slide4} alt=""></img>
          </SwiperSlide>
          <SwiperSlide>
            
            <img src={slide5} alt=""></img>
          </SwiperSlide>
        </Swiper>
      </div> */}
      <div className="grid grid-cols-4 gap-4 mt-5">
      <img className="mb-10" src={slide1} alt=""></img>
      <img className="mb-10" src={slide2} alt=""></img>
      <img className="mb-10" src={slide3} alt=""></img>
      <img className="mb-10" src={slide4} alt=""></img>
      </div>
    </div>
  );
};

export default Banner;
