import axios from 'axios'
import {
    SET_INITIAL_ENTRIES_SUCCESS, SET_INITIAL_STEPS, SET_INITIAL_YEARS
} from './types';


export function setInitialEntries(entries) {
    return async dispatch => {
        axios.get('http://127.0.0.1:8000/api/entries/').then(response => {
            dispatch({
                type: SET_INITIAL_ENTRIES_SUCCESS,
                payload: response.data
            });
        });
        axios.get('http://127.0.0.1:8000/api/years/').then(response => {
            dispatch({
                type: SET_INITIAL_YEARS,
                payload: response.data
            });
        });
        axios.get('http://127.0.0.1:8000/api/contest_steps/').then(response => {
            dispatch({
                type: SET_INITIAL_STEPS,
                payload: response.data
            });
        });
    };
}