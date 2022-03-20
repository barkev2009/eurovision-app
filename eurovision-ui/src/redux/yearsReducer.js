import { SET_INITIAL_YEARS } from "./types";

const initialState = {
    years: [],
    loading: false
}

function yearsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INITIAL_YEARS:
            return {...state, years: action.payload.map(item => item.year)}
        default:
            return state;
    }
}

export default yearsReducer;