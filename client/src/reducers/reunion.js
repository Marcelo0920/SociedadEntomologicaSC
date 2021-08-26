import {
    ADD_REUNION,
    GET_REUNIONES,
    REUNION_ERROR
} from '../actions/types';

const initialState = {
    reunions: [],
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case REUNION_ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            }
        case GET_REUNIONES:
            return{
                ...state,
                reunions: payload,
                loading: false
            }
        case ADD_REUNION:
            return{
                ...state,
                reunions: [payload, ...state.reunions],
                loading: false
            }
        default:
            return state;
    }
}