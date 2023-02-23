import { GET_WEIGHT, LOG_WEIGHT } from "../actionTypes/actionTypes";

export const logWeight = (data) => {
    return {
        type : LOG_WEIGHT,
        payload : data
    };
};

export const loadWeight = (data) => {
    return {
        type : GET_WEIGHT,
        payload : data
    };
};

// export const loadFood = (data) => {
//     return {
//         type : LOAD_FOOD,
//         payload : data
//     };
// };

// export const logFood = (data) => {
//     return {
//         type : LOG_FOOD,
//         payload : data
//     };
// };