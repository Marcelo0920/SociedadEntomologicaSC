import {
    GET_APPLY,
    APPLY_ERROR,
    ADD_APPLY,
} from '../actions/types';

const initialState = {
    posts: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case GET_APPLY:
            return{
                ...state,
                applies: payload,
                loading: false
            }
        case APPLY_ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            }
        case ADD_APPLY:
            return{
                ...state,
                applies: [payload, ...state.applies],
                loading: false
            }
        default:
            return state;
    }
}