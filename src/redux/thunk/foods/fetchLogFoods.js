import { loadLogFood } from "../../actionCreators/loggedFoodActions";

const loadLogFoodData = (email, date) =>{
    return async (dispatch, getState) => {
        // const res = await fetch('http://localhost:5000/foods');
        const res = await fetch(`http://localhost:5000/loggedFood/${email}?date=${date}`);
        const data = await res.json();

        if(data.length){
            dispatch(loadLogFood(data))
        }
    }
};

export default loadLogFoodData;