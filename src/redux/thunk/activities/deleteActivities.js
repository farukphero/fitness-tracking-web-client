import { removeActivities } from "../../actionCreators/activitiesActions";

const deleteActivityData = (id) => {
    return async ( dispatch, getState ) => {
        const res = await fetch(`https://fitness-tracking-web-server.vercel.app/activities/${id}`, {
            method : "DELETE",
            headers : {
                "content-type" : "application/json"
            },
        });
        const data = await res.json();

        if(data.acknowledged){
            dispatch(removeActivities(id))
        }
    };
};

export default deleteActivityData;
