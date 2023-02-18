import { loadFood } from "../../actionCreators/loggedFoodActions";

const loadFoodData = () =>{
    return async (dispatch, getState) => {
        const res = await fetch('https://fitness-tracking-web-server.vercel.app/foods');
        const data = await res.json();

        if(data.length){
            dispatch(loadFood(data))
        }
    }
};

export default loadFoodData;

