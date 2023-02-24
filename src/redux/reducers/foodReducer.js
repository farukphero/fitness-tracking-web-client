import {
  ADD_TO_FAVORITE,
  LOAD_FAVORITE_FOOD,
  LOAD_FOOD,
  LOAD_LOG_FOOD,
  LOG_FOOD,
  REMOVE_FROM_FAVORITE,
  REMOVE_LOG_FOOD,
  SEVEN_DAYS_FOOD,
} from "../actionTypes/actionTypes";

const initialState = {
  favorite: [],
  foods: [],
  loggedFoods: [],
  sevenDays: [],
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FOOD:
      return {
        ...state,
        foods: action.payload,
      };

    case LOG_FOOD:
      return {
        ...state,
        loggedFoods: [...state.loggedFoods, action.payload],
      };

    case LOAD_LOG_FOOD:
      return {
        ...state,
        loggedFoods: action.payload,
      };

    case REMOVE_LOG_FOOD:
      return {
        ...state,
        loggedFoods: state.loggedFoods.filter(
          (logFood) => logFood._id !== action.payload
        ),
      };

    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };

    case LOAD_FAVORITE_FOOD:
      return {
        ...state,
        favorite: action.payload,
      };

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favorite: state.favorite.filter((food) => food._id !== action.payload),
      };

    case SEVEN_DAYS_FOOD:
      return {
        ...state,
        sevenDays: action.payload,
      };

    default:
      return state;
  }
};

export default foodReducer;
