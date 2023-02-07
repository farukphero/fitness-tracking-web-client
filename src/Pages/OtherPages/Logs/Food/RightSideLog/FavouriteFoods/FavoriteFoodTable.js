import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../../Contexts/AuthProvider/AuthProvider';

const FavoriteFoodTable = ({ food, item, setItem}) => {
 
 const handleDelete = (food) => {
    fetch(`http://localhost:5000/favoriteFood/${food._id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  const handleLogFood = (food) => {
    console.log(food)
    setItem(food)
  }


  return (

    // <div className="table w-full mt-3 mb-1">

      <tr onClick={() => handleLogFood(food)}>
        <td className="bg-white text-black">{food.calorey} Cals</td>
        <td className="bg-white text-black">{food.food}</td>
        <td className="bg-white text-black">
        <button className="btn btn-xs text-white" onClick={() => handleDelete(food)}>X</button>
        </td>
      </tr>
      
    // </div>

  );
};
// const InputForm = ({ item, setItem }) => {
//   // console.log(item)
//   const [foodValue, setFoodValue] = useState('');
//   const [foodData, setFoodData] = useState({});
//   const [foodAmount, setFoodAmount] = useState('');
//   const [foodCalory, setFoodCalory] = useState('');
//   const [data, setData] = useState([]);
//   const user = useContext(AuthContext);
// // console.log(foodAmount, foodCalory)
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const month = currentDate.getMonth();
//   const day = currentDate.getDate();

//   const currentDateOnly = new Date(year, month, day);
//   const [startDate, setStartDate] = useState(currentDateOnly);


//   const handleOnChange = event => {
//     setFoodValue(event.target.value);
//     if (event.target.value === '') {
//       setFoodAmount('')
//       setFoodData({})
//       setFoodCalory("")
//     }

//   }


//   useEffect(() => {
//     fetch(`http://localhost:5000/favouriteFoods/${item.food}`)
//       .then(res => res.json())
//       .then(data => {
//         setData(data)
//       })
//   }, [item.food])

//   const onSearch = searchTerm => {
//     setFoodValue(searchTerm.name)
//     setFoodData(searchTerm)
//   }

//   // const handleAmount = (a, foodValue) => {
//   //   if (!foodValue) {
//   //     setFoodAmount('')
//   //     setFoodCalory("")
//   //   }
//   //   setFoodAmount(a.amount)
//   //   setFoodCalory(a.calorey)
//   // }
//   const handleAmount = (a, foodValue) => {
//     // if (!foodValue) {
//     //   setFoodAmount('')
//     //   setFoodCalory("")
//     // }
//     console.log(a.amount)
//     setFoodAmount(a.amount)
//     setFoodCalory(a.calorey)
//   }


//   const handleFoodLogForm = (event) => {
//     event.preventDefault()
//     const food = event.target.foodName.value;
//     const amount = event.target.amount.value;
//     const time = event.target.time.value;
//     const calorey = foodCalory;
//     const loged = { food: food, amount: amount, time: time, calorey: calorey, userEmail: user?.user?.email, date: startDate.toLocaleDateString() }
//     console.log(loged)

//     fetch('http://localhost:5000/loggedFood', {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(loged)
//     })
//       .then(res => res.json())
//       .then(result => {
//         console.log(result)

//       })
//     setItem(null)

//   };

//   const handleCloseForm = () => {
//     setItem(null)
//   }


//   return (
//     <form className='border-2' onSubmit={handleFoodLogForm}>
//       <div>
//         <div className='flex justify-end'>
//           <button className="btn btn-xs text-white mt-2" onClick={handleCloseForm}>X</button>
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text text-white font-semibold capitalize text-2xl">
//               what did you eat?
//             </span>
//           </label>
//           <input
//             type="text"
//             className="input bg-gray-500 input-bordered focus:outline-none"
//             name="foodName"
//             value={item.food}
//             onChange={handleOnChange}
//           />
//         </div>

//         <div>
//           {/* {data.filter(item => {
//             const searchTerm = foodValue.toLowerCase();
//             const foodName = item.name.toLowerCase();
//             return searchTerm && foodName.startsWith(searchTerm) && foodName !== searchTerm;
//           }).map(item => <div className=" bg-slate-200 w-1/2"
//             onClick={() => onSearch(item)}
//             key={item.name}
//           >
//             <p className="text-black p-3 mt-1">{item.name}</p>
//           </div>)} */}
//         </div>
//       </div>
//       <div className=" items-center justify-between space-x-3">
//         <div>

//           <div className="form-control basis-2/3">
//             <label className="label">
//               <span className="label-text text-white font-semibold lg:text-2xl capitalize">
//                 how much?
//               </span>
//             </label>
//             <input
//               type="text"
//               name="amount"
//               value={foodAmount}

//               className="input bg-gray-500 input-bordered focus:outline-none w-72 lg:w-[510px]"
//             />
//           </div>
//           <div>
//             {/* {foodData?.amount?.map(a => <div className=" bg-slate-200"
//               onClick={() => handleAmount(a, foodValue)}
//               key={a._id}
//             >
//               {!foodAmount && <p className="text-black p-3 mt-1">{a.amount}</p>}
//             </div>)} */}
//             {data[0]?.amount?.map(a => <div onClick={() => handleAmount(a)} className=" bg-slate-200"
              
             
//             >
//             {!foodAmount && <p  className="text-black p-3 mt-1">{a.amount}</p>}
//             </div>)}
//           </div>
        
//         </div>
//         <div className="form-control">

//           <label className="label ">
//             <span className="label-text font-semibold capitalize text-white lg:text-2xl">
//               when?
//             </span>
//           </label> <select
//             name="time" className="select select-bordered">

//             <option disabled selected>
//               Anytime
//             </option>
//             <option>Breakfast</option>
//             <option>Morning Snack</option>
//             <option>Launch</option>
//             <option>Afternoon Snack</option>
//             <option>Dinner</option>
//             <option>After Dinner</option>
//           </select>
//         </div>
//       </div>
//       <div className="form-control mt-6">
//         <button className="btn w-full border-none bg-gradient-to-r from-gray-700 via-green-500 to-gray-700 text-white hover:bg-gradient-to-r hover:from-gray-800 hover:via-green-400 hover:to-gray-800 hover:text-black">Log</button>
//       </div>
//     </form>
//   );
// };

export default FavoriteFoodTable;




