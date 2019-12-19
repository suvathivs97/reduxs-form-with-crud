import reducer from './data_red'
import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux'

export default combineReducers({
    name : reducer,
    routing: routerReducer
})