import { useContext } from "react";
import { FoodContext } from "../../../../../Contexts/FoodProvider/FoodProvider";
import useTitle from "../../../../../Hooks/useTitle/useTitle";
import LeftSideLog from "../LeftSideLog/LeftSideLog/LeftSideLog";
import RightSideLog from "../RightSideLog/RIghtSideLog/RightSideLog";

const Food = () => {
  const {logedFood, setLogedFood} = useContext(FoodContext);
  useTitle("Log/Food")


 
  return (
       <div className="flex md:w-10/12 lg:w-10/12 lg:space-x-5 mx-auto scale-50 md:scale-75 lg:scale-100
        -mt-[480px] md:-mt-80 lg:mt-0 -ml-40 md:-ml-24 lg:ml-32 lg:mb-20 -mb-60">
      <main className="w-full scale-75 lg:scale-100">
        <LeftSideLog logedFood={logedFood} setLogedFood={setLogedFood}></LeftSideLog>
      </main>
      <aside className="w-full scale-50 md:scale-75 lg:scale-100 -ml-36 md:-ml-20 lg:ml-0 md:mt-0 lg:mt-0 -mt-[265px]">
        <RightSideLog logedFood={logedFood} setLogedFood={setLogedFood}></RightSideLog>
      </aside>
    </div>
  );
};

export default Food;
