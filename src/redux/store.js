import {createStore, applyMiddleware} from "redux";
import foodReducer from "./reducers/foodReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";


const store = createStore(foodReducer, composeWithDevTools(applyMiddleware( thunk )) );

export default store;