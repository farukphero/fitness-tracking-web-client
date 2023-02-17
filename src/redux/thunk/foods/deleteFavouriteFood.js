import { removeFavouriteFood } from "../../actionCreators/loggedFoodActions";

const deleteFavoritedFood = (id) => {
    return async ( dispatch, getState ) => {
        const res = await fetch(`https://fitness-tracking-web-server.vercel.app/favoriteFood/${id}`, {
            method : "DELETE",
            headers : {
                "content-type" : "application/json"
            },
        });
        const data = await res.json();

        if(data.acknowledged){
            dispatch(removeFavouriteFood(id))
        }
    };
};

export default deleteFavoritedFood;
