import {combineReducers} from 'redux';
import alert from './alert';
import auth from './auth';
import post from './post';
import reunion from './reunion';
import comment from './comment';
import apply from './apply';

export default combineReducers({
    alert,
    auth,
    post,
    reunion,
    comment,
    apply
})