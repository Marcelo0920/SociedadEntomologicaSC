import axios from 'axios';
import {setAlert} from './alert';
import {USER_LOADED, AUTH_ERROR, LOGIN_FAILED, LOGIN_SUCCESS, LOG_OUT} from './types';
import setAuthToken from '../utils/setAuthToken';


//LOAD USER
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}


//LOGIN USER
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('/api/auth', body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser());
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: LOGIN_FAILED
        })
    }
}

//LOGOUT 
export const logout = () => dispatch =>{
    dispatch({type: LOG_OUT}); 
}