
import axios from 'axios';

import {GET_REUNIONES, REUNION_ERROR, ADD_REUNION} from './types';


//GET REUNIONES
export const getReunions = () => async dispatch => {
    try {
        const res = await axios.get('api/reunions');

        dispatch({
            type: GET_REUNIONES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: REUNION_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

//ADD REUNION
export const addReunion = formData => async dispatch => {
    
    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('api/reunions', formData, config);

        dispatch({
            type: ADD_REUNION,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: REUNION_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}