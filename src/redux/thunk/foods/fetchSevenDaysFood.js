import { sevenDaysFood } from "../../actionCreators/loggedFoodActions";

const loadSevenDaysFoodData = (email) =>{
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/foods/seven/${email}`);
        const data = await res.json();

        if(data.length){
            dispatch(sevenDaysFood(data))
        }
    }
};

export default loadSevenDaysFoodData;