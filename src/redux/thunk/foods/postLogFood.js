import { logFood } from "../../actionCreators/loggedFoodActions";

const postLogFood = (logedFood) => {
    return async (dispatch, getState) => {
        const res = await fetch('https://fitness-tracking-web-server.vercel.app/loggedFood', {
            method: "POST",
            body: JSON.stringify(logedFood),
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(logFood({
                _id: data.insertedId,
                ...logedFood,
            }))
        }
    }
};

export default postLogFood;