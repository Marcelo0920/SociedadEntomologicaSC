import axios from 'axios';

import {GET_COMMENTS, COMMENT_ERROR, ADD_COMMENT} from './types';


//GET COMMENTS
export const getComments = () => async dispatch => {
    try {
        const res = await axios.get('/api/comments');

        dispatch({
            type: GET_COMMENTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

//ADD COMMENT
export const addComment = formData => async dispatch => {

    const config = {
        header: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('api/comments', formData, config);

        dispatch({
            type: ADD_COMMENT,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: COMMENT_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}