import fetchUserReducer from './memberReducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
    fetchUserReducer
})

export default rootReducers;