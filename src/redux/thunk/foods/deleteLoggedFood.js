import { removeLogFood } from "../../actionCreators/loggedFoodActions";

const deleteLoggedFood = (id) => {
    return async ( dispatch, getState ) => {
        const res = await fetch(`https://fitness-tracking-web-server.vercel.app/loggedFood/${id}`, {
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

