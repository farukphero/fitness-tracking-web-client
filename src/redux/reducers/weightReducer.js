import { GET_WEIGHT, LOG_WEIGHT } from "../actionTypes/actionTypes";

export const initialState = {
    weight: []
};

export const weightReducer = (state = initialState, action) => {
    switch (action.type) {

       
        case LOG_WEIGHT :
            return {
                ...state,
                weight : [...state.weight, action.payload]
            };

            case GET_WEIGHT :
                return {
                    ...state,
                    weight : action.payload
                };

                // case LOAD_FOOD :
                //     return {
                //         ...state,
                //         foods : action.payload
                //     };
        
                // case LOG_FOOD :
                //     return {
                //         ...state,
                //         loggedFoods : [...state.loggedFoods, action.payload]
                //     };

        default:
            return state;
    };
};