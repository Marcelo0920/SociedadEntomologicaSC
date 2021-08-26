import axios from 'axios';
import {setAlert} from './alert';

import {GET_POSTS, POST_ERROR, ADD_POST} from './types';


//GET POSTS
export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        })
    }
}

//ADD POST
export const addPost = formData => async dispatch => {
    
   
    console.log(formData);
    try {
        const res = await axios.post('api/posts', formData);

        dispatch({
            type: ADD_POST,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status:err.response.status}        
  
        })
    }
}