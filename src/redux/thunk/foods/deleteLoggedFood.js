import { removeLogFood } from "../../actionCreators/loggedFoodActions";

const deleteLoggedFood = (id) => {
    return async ( dispatch, getState ) => {
        const res = await fetch(`http://localhost:5000/loggedFood/${id}`, {
            method : "DELETE",
            headers : {
                "content-type" : "application/json"
            },
        });
        const data = await res.json();

        if(data.acknowledged){
            dispatch(removeLogFood(id))
        }
    };
};

export default deleteLoggedFood;

