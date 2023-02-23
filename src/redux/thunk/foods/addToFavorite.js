import { addToFavorite } from "../../actionCreators/loggedFoodActions";

const addFavoriteFood = (food) => {
    return async (dispatch, getState) => {
        const res = await fetch('http://localhost:5000/favouriteFood', {
            method: "POST",
            body: JSON.stringify(food),
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(addToFavorite({
                _id: data.insertedId,
                ...food,
            }))
        }
    }
};

export default addFavoriteFood;