import React, { useState } from 'react';

const WeightCalculator = () => {

  const [weight, setWeight] = useState(0);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const age = form.age.value;
    const gender = form.gender.value;
    const heightFt = form.heightFt.value;
    const heightIn = form.heightIn.value;
    const height = (heightFt * 12) + parseInt(heightIn);

    //  calculation
    if (gender === "male") {
      const idealWeight = 52 + (1.9 * (height - 60));
      setWeight(idealWeight);
    } else if (gender === "female") {
      const idealWeight = 49 + (1.7 * (height - 60));
      setWeight(idealWeight)
    } 

  }
  return (
    <div className='my-10'>
      <h2 className='text-center text-3xl text-green-500'>Ideal Weight Calculator</h2>
      <h3 className='text-xl'>The Ideal Weight Calculator computes ideal body weight (IBW) ranges based on height, gender, and age. The idea of finding the IBW using a formula has been sought after by many experts for a long time. Currently, there persist several popular formulas, and our Ideal Weight Calculator provides their results for side-to-side comparisons.</h3>
      {/* input form */}
      <form onSubmit={handleSubmit} className='border border-green-600 p-10 rounded mx-auto my-5 w-2/4 '>
      {/* result */}
      {weight > 0 && <p className='text-3xl text-center text-green-500'>Your Ideal weight is: {weight} kg</p>}
      {weight < 0 && <p className='text-3xl text-center text-green-500'>Please provide positive number in input field</p>}
        <div className="form-group flex justify-between mx-10 mt-5">
          <label for="age" className='mt-2'>Age</label>
          <input type="number" id="age" name="age" className='text-center mt-2 rounded bg-gray-600' />
        </div>
        <div className="form-group flex justify-between mx-10">
          <label for="gender">Gender</label>
          <select id="gender" name="gender" className='mt-2 rounded bg-gray-600'>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group flex justify-between mx-10">
          <label for="heightFt">Height (ft)</label>
          <input type="number" id="heightFt" name="heightFt" className='text-center mt-2 rounded bg-gray-600' />
        </div>
        <div className="form-group flex justify-between mx-10 mb-10">
          <label for="heightIn">Height (in)</label>
          <input type="number" id="heightIn" name="heightIn" className='text-center mt-2 rounded bg-gray-600' />
        </div>
        <input type="submit" value="Calculate" className="btn btn-contact text-white w-10/12" />
      </form>

    </div>
  );
};

export default WeightCalculator;