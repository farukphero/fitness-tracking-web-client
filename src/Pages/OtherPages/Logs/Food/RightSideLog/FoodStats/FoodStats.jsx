import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { AuthContext } from "../../../../../../Contexts/AuthProvider/AuthProvider";
import loadSevenDaysFoodData from "../../../../../../redux/thunk/foods/fetchSevenDaysFood";

const FoodStats = () => {
  const user = useContext(AuthContext)
  // console.log(user.user.email)
  // const [foodData, setFoodData] = useState([]);
  const dispatch = useDispatch();
  const foodData = useSelector((state) => state.sevenDays);

  useEffect(() => {
    dispatch(loadSevenDaysFoodData(user?.user?.email))
  } ,[user?.user?.email, dispatch])
   


  const currentDate = new Date();
const sevenDaysAgo = new Date(currentDate - 0 * 24 * 60 * 60 * 1000);
const dates = [];

for (let i = 0; i < 7; i++) {
  const previousDay = new Date(sevenDaysAgo - i * 24 * 60 * 60 * 1000);
  const previousDayDateOnly = previousDay.toLocaleDateString();
  dates.push(previousDayDateOnly);
}

const dateWiseCalories = foodData.reduce((calories, food) => {
  if (!calories[food.date]) {
    calories[food.date] = 0;
  }
  calories[food.date] += parseInt(food.calorey, 0);
  return calories;
}, {});

const values = Object.values(dateWiseCalories);
const keys = Object.keys(dateWiseCalories);

  const myData = [
    {
      name: keys[0],
      // date: "2023-01-26",
      uv: values[0],
       
    },
    {
      name : keys[1],
      // date: "2023-01-26",
      uv: values[1],
       
    },
    {
      name : keys[2],
      // date: "2023-01-26",
      uv: values[2],
       
    },
    {
      name : keys[3],
      // date: "2023-01-26",
      uv: values[3],
      
    },
    {
      name : keys[4],
      // date: "2023-01-26",
      uv: values[4],
       
    },
    {
      name : keys[5],
      // date: "2023-01-26",
      uv: values[5],
       
    },
    {
      name : keys[6],
      // date: "2023-01-26",
      uv: values[6],
       
    },
    
  ]
  return (
    <ResponsiveContainer width="100%" aspect={1}>
      <BarChart width={150} height={40} data={myData}>
        mv: data,
        <Bar dataKey="uv" fill="#8884d8" />
        <CartesianGrid strokeDasharray="5 7" />
        <XAxis tick={{ stroke: `white` }} dataKey="name" />
        <YAxis tick={{ stroke: `yellow` }} dataKey="uv" />
        <Tooltip />
        <Legend />
      </BarChart>
    </ResponsiveContainer>



  );
};

export default FoodStats;
