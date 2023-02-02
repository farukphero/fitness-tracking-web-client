import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import FavoriteFoodTable from "./FavoriteFoodTable";

const FavouriteFoods = ({logedFood, setLogedFood}) => {
  const [favouriteFood, setFavouriteFood] = useState([]);
 
  
  const user = useContext(AuthContext)
 
  const user = useContext(AuthContext);
 
  const {
    isLoading,
    error,
    data: food,
    refetch,
  } = useQuery({
    queryKey: ["favouriteFood/userEmail"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/favouriteFood/${user?.user?.email}`
      );
      const data = await res.json();
      return setFavouriteFood(data);
    },
  });
  refetch();

  if (isLoading) return <progress className="progress w-56"></progress>;

 
  if (error) return 'An error has occurred: ' + error.message
  

  
 
  if (error) return "An error has occurred: " + error.message;
 
  return (
    <section>
      <div className="overflow-x-auto border rounded-md p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold lg:text-3xl">
              Favourite  Foods
            </span>
          </div>
          {/* <div className="flex space-x-3">
            <button className="btn btn-sm btn-outline   hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-500   text-white">
              Foods
            </button>
            <button className="btn btn-sm  btn-outline  hover:text-white hover:bg-gradient-to-r hover:from-gray-800 hover:to-green-500  text-white">
              Meals
            </button>
          </div> */}
        </div>
        <div>
          <table className="table w-full mt-3">
            <thead>
              <tr>
                <th className="bg-gray-200  text-black">Cals</th>
 
                <th className="bg-gray-200 text-black">Click on the item to log it</th>
                <th className="bg-gray-200 text-black"></th>
              </tr>
            </thead>
            <tbody>
              { favouriteFood?.map(food=><FavoriteFoodTable 
              logedFood={logedFood} 
              setLogedFood={setLogedFood}
              key={food._id}
              food={food}></FavoriteFoodTable>)}
 
                <th className="bg-gray-200 text-black">
                  Click on the item to log it
                </th>
              </tr>
            </thead>
            <tbody>
              {favouriteFood?.map((food) => (
                <tr key={food._id}>
                  <td className="bg-white text-black">{food.calorey} Cals</td>
                  <td className="bg-white text-black">{food.food}</td>
                </tr>
              ))}
 
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FavouriteFoods;
