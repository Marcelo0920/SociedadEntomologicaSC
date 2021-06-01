import {
    GET_POSTS,
    POST_ERROR
} from '../actions/types';

const initialState = {
    posts: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_POSTS:
            return{
                ...state,
                posts: payload,
                loading: false
            }
    }
}