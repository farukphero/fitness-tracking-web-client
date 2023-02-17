import { ADD_TO_FAVORITE, LOAD_FAVORITE_FOOD, LOAD_FOOD, LOAD_LOG_FOOD, LOG_FOOD, REMOVE_FROM_FAVORITE, REMOVE_LOG_FOOD, SEVEN_DAYS_FOOD } from "../actionTypes/actionTypes"

export const loadFood = (data) => {
    return {
        type : LOAD_FOOD,
        payload : data
    };
};

export const logFood = (data) => {
    return {
        type : LOG_FOOD,
        payload : data
    };
};

export const loadLogFood = (data) => {
    return {
        type : LOAD_LOG_FOOD,
        payload : data
    };
};

export const removeLogFood = (id) => {
    return {
        type : REMOVE_LOG_FOOD,
        payload : id
    };
};

export const addToFavorite = (food) => {
    return {
        type : ADD_TO_FAVORITE,
        payload : food
    };
};

export const loadFavoriteFood = (data) => {
    return {
        type : LOAD_FAVORITE_FOOD,
        payload : data
    };
};

export const removeFavouriteFood = (id) => {
    return {
        type : REMOVE_FROM_FAVORITE,
        payload : id
    };
};

export const sevenDaysFood = (food) => {
    return {
        type : SEVEN_DAYS_FOOD,
        payload : food
    };
};