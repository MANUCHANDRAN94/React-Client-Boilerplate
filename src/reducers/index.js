import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authentication from './auth';

export default combineReducers({
    auth:authentication,
    form:formReducer 
})