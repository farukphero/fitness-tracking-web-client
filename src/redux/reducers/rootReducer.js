import { combineReducers } from "redux";
import { activityReducer } from "./activityReducer";
import foodReducer from "./foodReducer";
import { weightReducer } from "./weightReducer";

const rootReducer = combineReducers({
    food : foodReducer,
    activity : activityReducer,
    weights: weightReducer
});

export default rootReducer;  