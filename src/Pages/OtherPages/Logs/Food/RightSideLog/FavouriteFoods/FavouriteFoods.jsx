import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import loadFavoriteFoodData from "../../../../../../redux/thunk/foods/fetchFavoriteFood";
import FavoriteFoodTable from "./FavoriteFoodTable";
import InputForm from "./InputForm";

const FavouriteFoods = ({logedFood, setLogedFood}) => {
  const [item, setItem] = useState(null);
  const user = useContext(AuthContext)
  const dispatch = useDispatch();
  const favouriteFood = useSelector((state) => state.favorite);
 
  
  useEffect(() => {
      dispatch(loadFavoriteFoodData(user?.user?.email))
  } ,[user?.user?.email, dispatch])
 
  return (
    <section>
       
      <div className=" border rounded-md p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold lg:text-3xl">
              Favorite  Foods
            </span>
          </div>
          </div>
        <div>
          <table className="table w-full mt-3 ">
            <thead>
              <tr>
                <th className="bg-gray-200  text-black">Cals</th>
                <th className="bg-gray-200 text-black">Click on the item to log it</th>
              </tr>
            </thead>
            <tbody>
              { favouriteFood?.map(food=><FavoriteFoodTable 
              logedFood={logedFood} 
              setLogedFood={setLogedFood}
              key={food._id}
              food={food}
              setItem={setItem}></FavoriteFoodTable>)}
              </tbody>
            <div >
            {item &&  <InputForm item={item} setItem={setItem} />}
            </div>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FavouriteFoods;
