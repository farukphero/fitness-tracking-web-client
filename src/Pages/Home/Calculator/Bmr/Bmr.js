import { useState } from "react";
import working9 from "../../../../assets/working9.json";
import Lottie from "lottie-react";
import useTitle from "../../../../Hooks/useTitle/useTitle";

const Bmr = () => {
  useTitle("Bmr");
  const [error, setError] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [bmrData, setBmrData] = useState({
    gender: "",
    weight: "",
    age: "",
    heightFeet: "",
    heightInches: "",
    activity: "",
    bmr: "",
    pal: "",
    weightType: "",
  });

  const handleAgeChange = (event) => {
    setBmrData((prevBrmData) => {
      return { ...prevBrmData, age: event.target.value };
    });
  };

  const handleWeightChange = (event) => {
    setBmrData((prevBrmData) => {
      return { ...prevBrmData, weight: event.target.value };
    });
  };

  const handleHeightFeetChange = (event) => {
    setBmrData((prevBrmData) => {
      return { ...prevBrmData, heightFeet: event.target.value };
    });
  };

  const handleHeightInchesChange = (event) => {
    setBmrData((prevBrmData) => {
      return { ...prevBrmData, heightInches: event.target.value };
    });
  };

  const handleGenderChange = (event) => {
    setBmrData((prevBrmData) => {
      return { ...prevBrmData, gender: event.target.value };
    });
  };

  const handleActivityChange = (event) => {
    setBmrData((prevBrmData) => {
      return { ...prevBrmData, activity: event.target.value };
    });
  };

  const handleWeightTypeChange = (event) => {
    setBmrData((prevBrmData) => {
      return { ...prevBrmData, weightType: event.target.value };
    });
  };

  const calculateBMR = () => {
    let { age, gender, heightFeet, heightInches, weight, weightType } = bmrData;

    if (
      age === "" ||
      gender === "" ||
      heightFeet === "" ||
      heightInches === "" ||
      weight === ""
    ) {
      return setError("All Fields are Required");
    }

    let bmrCalc = "";
    let height = heightFeet * 30.48 + heightInches * 2.54;

    if (weightType == 1) {
      if (gender == 2) {
        bmrCalc = 66 + 6.2 * weight + 12.7 * height - 6.76 * age;
      } else if (gender == 1) {
        bmrCalc = 655.1 + 4.35 * weight + 4.7 * height - 4.7 * age;
      }
    } else if (weightType == 2) {
      if (gender == 2) {
        bmrCalc = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
      } else if (gender == 1) {
        bmrCalc = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
      }
    }

    setBmrData((prevBrmData) => {
      return { ...prevBrmData, bmr: bmrCalc };
    });

    let activitySug = "";
    if (bmrCalc <= 1926) {
      activitySug = "Suggestion: little or no exercise.";
    } else if (bmrCalc > 1926 && bmrCalc <= 2207) {
      activitySug = "Suggestion: Exercise 1-3 times/week.";
    } else if (bmrCalc > 2207 && bmrCalc <= 2351) {
      activitySug = "Suggestion: Exercise 4-5 times/week.";
    } else if (bmrCalc > 2351 && bmrCalc <= 2488) {
      activitySug =
        "Suggestion: Daily exercise or intense exercise 3-4 times/week.";
    } else if (bmrCalc > 2488 && bmrCalc <= 2796) {
      activitySug = "Suggestion: Intense exercise 6-7 times/week.";
    } else if (bmrCalc > 2796) {
      activitySug = "Very intense exercise daily, or physical job.";
    }

    setSuggestion(activitySug);
    setError("");
  };

  const calculateKCalories = () => {
    let resultPAL;

    if (bmrData.activity) {
      resultPAL = (
        <div className="resultPAL">{bmrData.bmr * bmrData.activity}</div>
      );
    }

    setBmrData((prevBrmData) => {
      return { ...prevBrmData, pal: resultPAL };
    });
  };

  let resultError;
  if (error) {
    resultError = <div className="error">{error}</div>;
  }

  let resultSug;
  if (suggestion) {
    resultSug = <div className="resultSug">{suggestion}</div>;
  }

  let resultBMR;
  if (bmrData.bmr) {
    resultBMR = <div className="resultBMR">{bmrData.bmr}</div>;
  }

  let resultPAL;
  if (bmrData.pal) {
    resultPAL = <div className="resultSug">{bmrData.pal}</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2   mt-16 mb-44">
      {/* animation and type start here */}
      <div>
        <div className="flex justify-center ">
          <Lottie
            className="w-3/4"
            animationData={working9}
            loop={true}
          ></Lottie>
        </div>
      </div>

      <div className="mt-4  lg:ml-2  ">
        {/* form start here */}
        <div id="bmrcalc">
          <div
            className="mt-4 ml-24 md:ml-44 lg:ml-2  "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            {/* form start here */}
            <div
              id="bmrcalc"
              className="box w-4/5 lg:w-2/3 px-8 pb-8 pt-14 rounded-lg"
            >
              <div className="form">
                <h2 className="text-3xl font-bold">BMR CALCULATOR</h2>
                <h1 className="text-red-800 font-bold ">{resultError}</h1>
                <div className="inputwrap">
                  <label className="label text-2xl">Gender :</label>
                  <label className="mr-2">
                    <input
                      type="radio"
                      checked={bmrData.gender == "1"}
                      onChange={handleGenderChange}
                      className="genderF mr-2"
                      name="gender"
                      value="1"
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      checked={bmrData.gender == "2"}
                      onChange={handleGenderChange}
                      className="genderM mr-2"
                      name="gender"
                      value="2"
                    />
                    Male
                  </label>
                </div>
                <div className="inputwrap">
                  <label className="label text-2xl">Weight :</label>

                  {/* <label className="mr-2"> */}

                  <label className="mr-8 lg:mr-2">
                    <input
                      type="radio"
                      checked={bmrData.weightType == "1"}
                      onChange={handleWeightTypeChange}
                      className="imperial mr-2"
                      name="wrightT"
                      value="1"
                    />
                    Imperial (in lbs)
                  </label>
                  <label className="mr-2">
                    <input
                      type="radio"
                      checked={bmrData.weightType == "2"}
                      onChange={handleWeightTypeChange}
                      className="metric mr-2"
                      name="wrightT"
                      value="2"
                    />
                    Metric (in KG)
                  </label>
                  <input
                    type="text"
                    placeholder="Weight"
                    className=" weight input input-bordered w-32 "
                    value={bmrData.weight}
                    onChange={handleWeightChange}
                    name="weight"
                    min="0"
                    max="999"
                  />
                </div>
                <div className="inputwrap">
                  <label className="label text-2xl ">
                    Height in feet and inches :
                  </label>

                  <input
                    type="number"
                    placeholder="feet"
                    // className="heightFeet text-black input input-bordered  w-36 mr-2 "

                    className="heightFeet text-black input input-bordered  w-36 mr-2 mb-4 lg:mb-0 "
                    value={bmrData.heightFeet}
                    onChange={handleHeightFeetChange}
                    name="heightFeet"
                    min="0"
                    max="8"
                  />

                  <input
                    placeholder="inches"
                    className="heightInches text-black input input-bordered w-36 "
                    type="number"
                    value={bmrData.heightInches}
                    onChange={handleHeightInchesChange}
                    name="heightInches"
                    min="0"
                    max="11"
                  />
                </div>
                <div className="inputwrap">
                  <label className="label text-2xl">Age in years :</label>
                  <input
                    type="number"
                    placeholder="Age"
                    className="age input input-bordered w-44"
                    value={bmrData.age}
                    onChange={handleAgeChange}
                    name="age"
                    min="0"
                    max="120"
                  />
                </div>

                {/* modal start here */}
                <label
                  htmlFor="my-modal-3"
                  type="button"
                  onClick={() => calculateBMR()}
                  className="btn btn-log  bg-secondary text-black w-full border-none mt-2"
                >
                  Calculate BMR
                </label>

                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                />
                <div className="modal  bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600">
                  <div className="modal-box relative  bg-gradient-to-r from-gray-600 via-teal-700 to-gray-600">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <h1 className="text-1xl  font-bold">
                      Your BMR is :{resultBMR}
                    </h1>
                    <h3 className="font-bold">{resultSug}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bmr;
