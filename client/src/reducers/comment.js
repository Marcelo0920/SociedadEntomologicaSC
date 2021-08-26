import {GET_COMMENTS, COMMENT_ERROR, ADD_COMMENT} from '../actions/types';


const initialState = {
    comments: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_COMMENTS:
            return{
                ...state,
                comments: payload,
                loading: false
            }
        case COMMENT_ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            }
        case ADD_COMMENT:
            return{
                ...state,
                comments: [payload, ...state.comments],
                loading: false
            }
        default:
            return state
    }
}