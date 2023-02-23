import { DELETE_ACTIVITIES, FETCHDATA, LOAD_ACTIVITIES, POST_ACTIVITIES } from "../actionTypes/actionTypes";

export const loadActivities = (data) => {
    return {
        type : LOAD_ACTIVITIES,
        payload : data
    };
};

export const removeActivities = (id) => {
    return {
        type : DELETE_ACTIVITIES,
        payload : id
    };
};



