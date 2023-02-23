import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../../../Contexts/AuthProvider/AuthProvider';
import loadALLFavoriteFoodData from '../../../../../../redux/thunk/foods/fetchAllFavoriteFood';
import FavoriteFoodTable from './FavoriteFoodTable';
import InputForm from './InputForm';

const AllFavoriteFood = ( ) => {

    const location = useLocation();
    const logedFood = location.state?.from?.logedFood;
    const setLogedFood = location.state?.from?.setLogedFood;
    const user = useContext(AuthContext)
    const [item, setItem] = useState(null);

    const dispatch = useDispatch();
    const favouriteFood = useSelector((state) => state.food.favorite);

    useEffect(() => {
        dispatch(loadALLFavoriteFoodData(user?.user?.email))
    } ,[user?.user?.email, dispatch])
    return (
        
       
        <div className=" border rounded-md p-3 container mx-auto">
          <div className="flex items-center justify-center">
            
              
              {/* <span className="font-semibold lg:text-3xl">
                Favorite  Foods
              </span> */}
             
           
            </div>
          <div>
            <table className="table w-full mt-3 ">
              <thead>
                <tr>
                  <th className="bg-gray-200  text-black text-2xl text-center">You have {favouriteFood.length} favorite foods (you can log your food or delete from favorite here)</th>
                  {/* <th className="bg-gray-200 text-black">Click on the item to log it</th> */}
                </tr>
              </thead>
              <tbody className='w-full'>
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
     
    );
};

export default AllFavoriteFood;