import { useContext } from "react";
import { FoodContext } from "../../../../../Contexts/FoodProvider/FoodProvider";
import useTitle from "../../../../../Hooks/useTitle/useTitle";
import LeftSideLog from "../LeftSideLog/LeftSideLog/LeftSideLog";
import RightSideLog from "../RightSideLog/RIghtSideLog/RightSideLog";

const Food = () => {
  const {logedFood, setLogedFood} = useContext(FoodContext);
  useTitle("Log/Food")
 
  return (
       <div className="flex lg:w-10/12 lg:space-x-5 mx-auto scale-50 lg:scale-100 -mt-96 lg:mt-0 -ml-40 lg:ml-32 lg:mb-20 -mb-60">
      <main className="w-full scale-75 lg:scale-100">
        <LeftSideLog logedFood={logedFood} setLogedFood={setLogedFood}></LeftSideLog>
      </main>
      <aside className="w-full scale-75 lg:scale-100 -ml-24">
        <RightSideLog logedFood={logedFood} setLogedFood={setLogedFood}></RightSideLog>
      </aside>
    </div>
  );
};

export default Food;
