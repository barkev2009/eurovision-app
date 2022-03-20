import { combineReducers } from "redux";
import allEntriesReducer from "./allEntriesReducer";
import stepsReducer from "./stepsReducer";
import yearsReducer from "./yearsReducer";

export const rootReducer = combineReducers({
    entries: allEntriesReducer,
    years: yearsReducer,
    steps: stepsReducer
})