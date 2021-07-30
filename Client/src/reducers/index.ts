import { combineReducers } from "redux";
import { activities } from "./activitiesReducer";

const rootReducer = combineReducers({ activities });
export default rootReducer;
