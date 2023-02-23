import { loadAllFavoriteFood } from "../../actionCreators/loggedFoodActions";

const loadALLFavoriteFoodData = (email) =>{
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/allFavouriteFood/${email}`);
        const data = await res.json();

        if(data.length){
            dispatch(loadAllFavoriteFood(data))
        }
    }
};

export default loadALLFavoriteFoodData;