
import { createContext, useState } from "react";

export const FoodContext = createContext();

const FoodProvider = ({ children }) => {

    const [logedFood, setLogedFood] = useState([]);
    const [foodValue, setFoodValue] = useState('');
    const [foodData, setFoodData] = useState({});
    const [foodAmount, setFoodAmount] = useState('');
    const [foodCalory, setFoodCalory] = useState('');
    const [data, setData] = useState([]);
    const [logedWater ,setLogedWater] = useState([]);
  const [totalWater, setTotalWater] = useState(0);
    
  const foodInfo = {
    logedFood,
    setLogedFood,
    foodValue,
    setFoodValue, 
    foodData, 
    setFoodData, 
    foodAmount, 
    setFoodAmount, 
    foodCalory, 
    setFoodCalory, 
    data, 
    setData,
    logedWater,
    setLogedWater,
    totalWater,
    setTotalWater
  };
  return (
    <FoodContext.Provider value={foodInfo}>{children}</FoodContext.Provider>
  );
};

export default FoodProvider;
