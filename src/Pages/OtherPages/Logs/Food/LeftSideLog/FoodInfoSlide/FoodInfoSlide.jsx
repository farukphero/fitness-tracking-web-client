// import React, { useContext, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import plate from "../../../../../../images/plate.png";
// import timer from "../../../../../../images/timer.png";
// import { AiTwotoneFire } from "react-icons/ai";
// import { ImSpoonKnife } from "react-icons/im";
// import DatePicker from "react-datepicker";
// import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

// const swiperContent = [{}];

// const FoodInfoSlide = ({ result, startDate, setStartDate }) => {
//   const user = useContext(AuthContext);

//   const [weightGoal, setWeightGoal] = useState([]);
//   // console.log(weightGoal[0]?.goalType)


//   useEffect(() => {
//     fetch(`https://fitness-tracking-web-server.vercel.app/weightGoal?email=${user?.user?.email}`)
//       .then(res => res.json())
//       .then(data => {
//         // console.log(data)
//         setWeightGoal(data)
//       })
//   }, [user?.user?.email])
//   const userBmr = (user) => {

//     if (user?.userInfo?.gender === 'Male') {
//       return 88.36 + (13.4 * parseInt(user?.userInfo?.weight)) + (4.8 * (5.5 * 30.48)) - (5.7 * parseInt(user?.userInfo?.age))
//     }
//     else if (user?.userInfo?.gender === 'female') {
//       return 447.6 + (9.2 * parseInt(user?.userInfo?.weight)) + (3.1 * (5.5 * 30.48)) - (4.3 * parseInt(user?.userInfo?.age))
//     }

//   }


//   useEffect(() => {
//     fetch(`https://fitness-tracking-web-server.vercel.app/activities/1?email=${user?.user?.email}`)
//       .then(res => res.json())
//       .then(data => {
//         // console.log(data)
//       })
//   }, [user?.user?.email])
//   const gainWeight = parseInt(weightGoal[0]?.expectedWeight);
//   const day = parseInt(weightGoal[0]?.days);

//   useState(() => {
//     fetch(`https://fitness-tracking-web-server.vercel.app/activities/7?email=${user?.user?.email}`)
//       .then(res => res.json())
//       .then(data => {
//         // console.log(data)
//       })
//   }, [])

//   const extraCalorey = (7700 * gainWeight) / day;
//   const bmr = userBmr(user)
//   const TEE = 2200;
//   const pal = TEE / bmr;
//   const dailyCaloryRequirementMaintanance = (pal * bmr);
//   const dailyCaloryRequirementGain = parseInt(dailyCaloryRequirementMaintanance + extraCalorey);
//   const dailyCaloryRequirementLose = parseInt(dailyCaloryRequirementMaintanance - extraCalorey);

//   const needCalory = (weightGoal, TEE) => {
//     if (weightGoal[0]?.goalType === 'Gain') {
//       return dailyCaloryRequirementGain - result
//     }
//     else if (weightGoal[0]?.goalType === 'Lose') {
//       return dailyCaloryRequirementLose - result
//     }
//     else {
//       return TEE
//     }
//   }
//   const cal = needCalory(weightGoal, TEE);

//   return (
//     <>
//       <div className="flex justify-between">
//         <p></p>
//         <div>
//           <DatePicker className="font-bold w-2/4 lg:text-2xl capitalize bg-green-800"
//             name="date"
//             defaultValue='select'
//             selected={startDate}
//             // value={startDate}
//             onChange={date => setStartDate(date)}
//           />
//         </div>
//       </div>
//       <div className="py-12 px-4 rounded-md border">
//         <Swiper
//           slidesPerView={`auto`}
//           navigation={true}
//           pagination={true}
//           modules={[Navigation, Pagination]}
//           className="w-full"
//         >
//           <SwiperSlide>
//             <div className="pb-10 text-center">
//               <h3 className="text-2xl">Food Plan (how much you should eat for the day)</h3>
//             </div>
//             <div className="flex items-center justify-center space-x-6 capitalize text-center">
//               <div className="avatar">
//                 <div className="w-12 md:w-32">
//                   <img src={plate} alt="plate" />
//                 </div>
//               </div>
//               <h2 className="font-bold text-xl">today you can still eat <span className="text-green-500">{cal}</span> cals</h2>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="pb-10 text-center">
//               <h3 className="text-2xl">Calories in vs out (are you on track right now)</h3>
//             </div>
//             <div className=" flex items-center justify-center space-x-6 capitalize text-center">
//               <div className="avatar">
//                 <div className="w-32">
//                   <img src={timer} alt="timer" />
//                 </div>
//               </div>
//               <div>
//                 <div className="gap-y-3 flex flex-col">
//                   <div className="flex space-x-3 items-center">
//                     <AiTwotoneFire className="text-yellow-500 text-2xl" />
//                     <h2 className="capitalize text-xl">
//                       burned :{" "}
//                       <span className="font-semibold">78 calories</span>
//                     </h2>
//                   </div>
//                   <div className="flex space-x-3 items-center">
//                     <ImSpoonKnife className="text-gray-100 text-2xl" />
//                     <h2 className="capitalize text-xl">
//                       eaten : <span className="font-semibold"><span className="text-green-500">{result}</span> calories</span>
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//           {/* <SwiperSlide>
//           <div className="pb-10 text-center">
//               <h3 className="text-2xl">Plan Summary</h3>
//             </div>
//             <div className=" flex items-center justify-center space-x-6 capitalize text-center">
//               <div className="avatar">
//                 <div className="w-32">
//                   <img src={timer} alt="timer" />
//                 </div>
//               </div>
//               <div>
//                 <div className="gap-y-3 flex flex-col">
//                   <div className="flex space-x-3 items-center">
//                     <AiTwotoneFire className="text-yellow-500 text-2xl" />
//                     <h2 className="capitalize text-xl">
//                       burned :{" "}
//                       <span className="font-semibold">78 calories</span>
//                     </h2>
//                   </div>
//                   <div className="flex space-x-3 items-center">
//                     <ImSpoonKnife className="text-gray-100 text-2xl" />
//                     <h2 className="capitalize text-xl">
//                       eaten : <span className="font-semibold"> <span className="font-semibold"><span className="text-green-500">{result}</span> calories</span></span>
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide> */}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default FoodInfoSlide;

import React, { useContext, useEffect, useState } from "react";
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
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";

const swiperContent = [{}];

const FoodInfoSlide = ({ result, startDate, setStartDate }) => {
  const user = useContext(AuthContext);

  const [weightGoal, setWeightGoal] = useState([]);
  // console.log(weightGoal[0]?.goalType)


  useEffect(() => {
    fetch(`https://fitness-tracking-web-server.vercel.app/weightGoal?email=${user?.user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        setWeightGoal(data)
      })
  }, [user?.user?.email])
  const userBmr = (user) => {

    if (user?.userInfo?.gender === 'Male') {
      return 88.36 + (13.4 * parseInt(user?.userInfo?.weight)) + (4.8 * (5.5 * 30.48)) - (5.7 * parseInt(user?.userInfo?.age))
    }
    else if (user?.userInfo?.gender === 'female') {
      return 447.6 + (9.2 * parseInt(user?.userInfo?.weight)) + (3.1 * (5.5 * 30.48)) - (4.3 * parseInt(user?.userInfo?.age))
    }

  }


  useEffect(() => {
    fetch(`https://fitness-tracking-web-server.vercel.app/activities/1?email=${user?.user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
      })
  }, [user?.user?.email])
  const gainWeight = parseInt(weightGoal[0]?.expectedWeight);
  const day = parseInt(weightGoal[0]?.days);

  useState(() => {
    fetch(`https://fitness-tracking-web-server.vercel.app/activities/7?email=${user?.user?.email}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
      })
  }, [])

  const extraCalorey = (7700 * gainWeight) / day;
  const bmr = userBmr(user)
  const TEE = 2200;
  const pal = TEE / bmr;
  const dailyCaloryRequirementMaintanance = (pal * bmr);
  const dailyCaloryRequirementGain = parseInt(dailyCaloryRequirementMaintanance + extraCalorey);
  const dailyCaloryRequirementLose = parseInt(dailyCaloryRequirementMaintanance - extraCalorey);

  const needCalory = (weightGoal, TEE) => {
    if (weightGoal[0]?.goalType === 'Gain') {
      return dailyCaloryRequirementGain - result
    }
    else if (weightGoal[0]?.goalType === 'Lose') {
      return dailyCaloryRequirementLose - result
    }
    else {
      return TEE
    }
  }
  const cal = needCalory(weightGoal, TEE);

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
              <h2 className="font-bold text-xl">today you can still eat <span className="text-green-500">{cal}</span> cals</h2>
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
          {/* <SwiperSlide>
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
                      eaten : <span className="font-semibold"> <span className="font-semibold"><span className="text-green-500">{result}</span> calories</span></span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
};

export default FoodInfoSlide;