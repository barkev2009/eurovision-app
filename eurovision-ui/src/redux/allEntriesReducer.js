import { 
    SET_INITIAL_ENTRIES_ENDED, 
    SET_INITIAL_ENTRIES_STARTED, 
    SET_INITIAL_ENTRIES_SUCCESS 
} from "./types";

const initialState = {
    entries: [],
    loading: false
}

function allEntriesReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INITIAL_ENTRIES_STARTED:
            return {...state, loading: true}
        case SET_INITIAL_ENTRIES_SUCCESS:
            return {...state, loading: false, entries: action.payload}
        case SET_INITIAL_ENTRIES_ENDED:
            return {...state, loading: false}
        default:
            return state;
    }
}

export default allEntriesReducer;