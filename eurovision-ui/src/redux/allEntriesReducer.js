const initialState = {
    entries: [],
    loading: false
}

function allEntriesReducer(state = initialState, action) {
    switch (action) {
        case 'SET_INIT_ENTRIES_STARTED':
            return {...state, loading: true}
        case 'SET_INIT_ENTRIES_SUCCESS':
            return {...state, loading: false, entries: action.payload}
        case 'SET_INIT_ENTRIES_ENDED':
            return {...state, loading: false}
        default:
            return state;
    }
}

export default allEntriesReducer;