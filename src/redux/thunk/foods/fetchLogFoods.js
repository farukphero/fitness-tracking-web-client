import { loadLogFood } from "../../actionCreators/loggedFoodActions";

const loadLogFoodData = (email, date) =>{
    return async (dispatch, getState) => {
        // const res = await fetch('https://fitness-tracking-web-server.vercel.app/foods');
        const res = await fetch(`https://fitness-tracking-web-server.vercel.app/loggedFood/${email}?date=${date}`);
        const data = await res.json();

        if(data.length){
            dispatch(loadLogFood(data))
        }
    }
};

export default loadLogFoodData;