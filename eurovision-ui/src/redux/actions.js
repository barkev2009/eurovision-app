import axios from 'axios'

// export function setInitialEntries(entries) {
//     return async dispatch => {
//         const response = await fetch('http://127.0.0.1:8000/api/entries/')
//         const json = response.json()
//         dispatch(setInitialEntriesSuccess(json))
//     }
// }

// export function setInitialEntries(entries) {
//     return function(dispatch) {
//         return axios.get('http://127.0.0.1:8000/api/entries/').then(response => {
//             // dispatch
//             dispatch({
//                 type: 'SET_INIT_ENTRIES_SUCCESS',
//                 payload: response.data
//             });
//         });
//     };
// }

export const setInitialEntriesStart = () => ({
    type: 'SET_INIT_ENTRIES_STARTED'
})

export const setInitialEntriesSuccess = entries => ({
    type: 'SET_INIT_ENTRIES_SUCCESS',
    payload: [...entries]
})

export const setInitialEntriesEnd = () => ({
    type: 'SET_INIT_ENTRIES_ENDED'
})