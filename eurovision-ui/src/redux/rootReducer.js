import { combineReducers } from "redux";
import allEntriesReducer from "./allEntriesReducer";

export const rootReducer = combineReducers({
    allEntries: allEntriesReducer
})