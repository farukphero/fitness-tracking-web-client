import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 h-screen  ">
      <p className="py-20 flex justify-center text-3xl text-white">
    
        Loading... <br /> Please wait
      </p>
      <div className="my-20 flex justify-center ">
        <ThreeCircles
          height="100"
          width="100"
          color="#19D3AE"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </div>
  );
};

export default Loading;
