import { loadActivities } from "../../actionCreators/activitiesActions";

const loadActivitiesData = (email) =>{
    return async (dispatch, getState) => {
        const res = await fetch(`https://fitness-tracking-web-server.vercel.app/activities?activist=${email}`);
        const data = await res.json();

        if(data.length){
            dispatch(loadActivities(data))
        }
    }
};

export default loadActivitiesData;

