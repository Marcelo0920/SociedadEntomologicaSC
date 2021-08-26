import axios from 'axios';
import {setAlert} from './alert';

import {GET_APPLY, APPLY_ERROR, ADD_APPLY} from './types';


//GET APPLIES
export const getApplies = () => async dispatch => {


    try {
        const res = await axios.get('/api/postulants');

        dispatch({
            type: GET_APPLY,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: APPLY_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

//ADD APPLY
export const addApply = formData => async dispatch =>{

    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('api/postulants', formData, config);

        dispatch({
            type: ADD_APPLY,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: APPLY_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}