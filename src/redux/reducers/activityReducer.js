import { DELETE_ACTIVITIES, FETCHDATA, LOAD_ACTIVITIES, POST_ACTIVITIES } from "../actionTypes/actionTypes";

export const initialState = {
    activities: []
};

export const activityReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOAD_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };


        case DELETE_ACTIVITIES:
            return {
                ...state,
                activities: state.activities.filter(
                    (activity) => activity._id !== action.payload
                )
            };


        default:
            return state;
    };
};