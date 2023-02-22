import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
        <p className="my-20 flex justify-center text-lg text-white"> Loading... <br /> Please wait</p>
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
