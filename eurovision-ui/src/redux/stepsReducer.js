import { SET_INITIAL_STEPS } from "./types";

const initialState = {
    steps: [],
    loading: false
}

function stepsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INITIAL_STEPS:
            return {...state, steps: action.payload.map(item => item.name)}
        default:
            return state;
    }
}

export default stepsReducer;