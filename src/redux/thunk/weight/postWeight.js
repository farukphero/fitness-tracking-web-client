import { logWeight } from "../../actionCreators/weightActions";

const postWeight = (weight) => {
    return async (dispatch, getState) => {
        const res = await fetch('https://fitness-tracking-web-server.vercel.app/logedWeight', {
            method: "POST",
            body: JSON.stringify(weight),
            headers: {
                'content-type': 'application/json'
            }
        });
        const data = await res.json();

        if (data.acknowledged) {
            dispatch(logWeight({
                _id: data.insertedId,
                ...weight,
            }))
        }
    }
};

export default postWeight;