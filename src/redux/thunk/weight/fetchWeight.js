import { loadWeight } from "../../actionCreators/weightActions";

const loadWeightData = (email) =>{
    return async (dispatch, getState) => {
        const res = await fetch(`https://fitness-tracking-web-server.vercel.app/logedWeight?email=${email}`);
        const data = await res.json();

        if(data.length){
            dispatch(loadWeight(data))
        }
    }
};

export default loadWeightData;