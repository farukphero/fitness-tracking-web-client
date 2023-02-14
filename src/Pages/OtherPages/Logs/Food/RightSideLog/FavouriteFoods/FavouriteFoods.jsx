import React, { useContext, useState } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import FavoriteFoodTable from "./FavoriteFoodTable";
import InputForm from "./InputForm";

const FavouriteFoods = ({logedFood, setLogedFood}) => {
  const [favouriteFood, setFavouriteFood] = useState([]);
  const [item, setItem] = useState(null);
  const user = useContext(AuthContext)
 
  const {
    isLoading,
    error,
    data: food,
    refetch,
  } = useQuery({
    queryKey: ["favouriteFood/userEmail"],
    queryFn: async () => {
 
      const res = await fetch(
        `https://fitness-tracking-web-server.vercel.app/favouriteFood/${user?.user?.email}`
      );
 
      const data = await res.json();
      return setFavouriteFood(data);
    },
  });
  refetch();

  if (isLoading) return <progress className="progress w-56"></progress>;

 
  if (error) return 'An error has occurred: ' + error.message
 
  return (
    <section>
      {/* <div className="overflow-x-auto border rounded-md p-3"> */}
      <div className=" border rounded-md p-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-semibold lg:text-3xl">
              Favourite  Foods
            </span>
          </div>
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
              food={food}
              setItem={setItem}></FavoriteFoodTable>)}
              </tbody>
            <div >
            {item && <InputForm item={item} setItem={setItem} />}
            </div>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FavouriteFoods;
