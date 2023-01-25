import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const FoodLog = () => {
  const { register, handleSubmit } = useForm();
  const [foodData, setFoodData] = useState([]);
  const [value, setValue] = useState(``);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/foods`)
      .then((data) => setFoodData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const handleFoodLogForm = (data) => {
    console.log(data);
  };

  const foodName = register(`foodName`, { required: `true` });
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log(`search`, searchTerm);
  };

  return (
    <>
      <div className="card-body border rounded-md">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-4xl capitalize">food log</h2>
        </div>
        <form onSubmit={handleSubmit(handleFoodLogForm)}>
          <div className="form-control">
            <div className="dropdown">
              <label className="label">
                <span className="label-text text-white font-semibold capitalize text-2xl">
                  what did you eat?
                </span>
              </label>
              <input
                value={value}
                onChange={(e) => {
                  foodName.onChange(e);
                  handleChange(e);
                }}
                type="text"
                className="input bg-gray-500 input-bordered focus:outline-none w-full"
              />
              <ul
                tabIndex={0}
                className={` ${
                  value
                    ? `dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52`
                    : ``
                } `}
              >
                {foodData
                  ?.filter((item) => {
                    const searchTerm = value?.toLowerCase();
                    const FoodItem = item?.name?.toLowerCase();
                    return (
                      searchTerm &&
                      FoodItem.startsWith(searchTerm) &&
                      FoodItem !== searchTerm
                    );
                  })
                  ?.slice(0, 10)
                  ?.map((item, _id) => (
                    <li key={_id} onClick={() => onSearch(item?.name)}>
                      <Link>{item?.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-3">
            <div className="form-control basis-2/3">
              <label className="label">
                <span className="label-text text-white font-semibold text-2xl capitalize">
                  how much?
                </span>
              </label>
              <input
                type="text"
                className="input input-md input-bordered bg-gray-500 focus:outline-none"
                {...register(`amount`)}
              />
            </div>
            <div className="form-control basis-1/3">
              <label className="label">
                <span className="label-text font-semibold capitalize text-white text-2xl">
                  when?
                </span>
              </label>
              <select
                {...register(`time`)}
                className="select bg-gray-500 input-md select-bordered"
              >
                <option disabled selected>
                  Anytime
                </option>
                <option>Breakfast</option>
                <option>Morning Snack</option>
                <option>Launch</option>
                <option>Afternoon Snack</option>
                <option>Dinner</option>
                <option>After Dinner</option>
              </select>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-contact capitalize"
              type="submit"
              value="log"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FoodLog;
